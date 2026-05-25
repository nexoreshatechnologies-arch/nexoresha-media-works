import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || '';
const MONGODB_DB = process.env.MONGODB_DB || 'nexoresha';

let cachedClient: any = null;
let cachedDb: any = null;

// Mock database classes for fallback operation
class MockCollection {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  private getFilePath() {
    const path = require('path');
    return path.join(process.cwd(), 'lib', 'mock_db.json');
  }

  private readData() {
    const fs = require('fs');
    const filepath = this.getFilePath();
    try {
      if (fs.existsSync(filepath)) {
        return JSON.parse(fs.readFileSync(filepath, 'utf8'));
      }
    } catch (e) {
      console.error('Error reading mock DB file:', e);
    }
    return {};
  }

  private writeData(data: any) {
    const fs = require('fs');
    const filepath = this.getFilePath();
    try {
      fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    } catch (e) {
      console.error('Error writing mock DB file:', e);
    }
  }

  async insertOne(doc: any) {
    console.log(`[Mock DB - ${this.name}] Inserting doc:`, doc);
    const data = this.readData();
    if (!data[this.name]) data[this.name] = [];
    
    const docWithId = {
      _id: doc._id || Math.random().toString(36).substring(2, 11),
      createdAt: new Date().toISOString(),
      ...doc
    };
    
    data[this.name].push(docWithId);
    this.writeData(data);
    
    return { acknowledged: true, insertedId: docWithId._id };
  }

  async updateOne(filter: any, update: any) {
    console.log(`[Mock DB - ${this.name}] Updating where:`, filter, 'with:', update);
    const data = this.readData();
    const list = data[this.name] || [];
    
    // Find item matching filter
    const key = Object.keys(filter)[0];
    const val = filter[key];
    const item = list.find((item: any) => item[key] === val);
    
    if (item && update.$set) {
      Object.assign(item, update.$set);
      item.updatedAt = new Date().toISOString();
      this.writeData(data);
      return { acknowledged: true, modifiedCount: 1 };
    }
    
    return { acknowledged: true, modifiedCount: 0 };
  }

  async find(filter: any = {}) {
    const data = this.readData();
    const list = data[this.name] || [];
    
    // Simple filter matching
    const filtered = list.filter((item: any) => {
      return Object.keys(filter).every(key => item[key] === filter[key]);
    });
    
    return {
      toArray: async () => filtered
    };
  }

  async findOne(filter: any = {}) {
    const data = this.readData();
    const list = data[this.name] || [];
    const item = list.find((item: any) => {
      return Object.keys(filter).every(key => item[key] === filter[key]);
    });
    return item || null;
  }
}

class MockDb {
  collection(name: string) {
    return new MockCollection(name);
  }
}

export async function connectToDatabase() {
  // If we don't have a MongoDB URI, return mock db client
  if (!MONGODB_URI) {
    console.warn('MONGODB_URI is not defined. Falling back to mock JSON database storage at ./lib/mock_db.json');
    return {
      client: { close: async () => {} } as any,
      db: new MockDb() as any
    };
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
