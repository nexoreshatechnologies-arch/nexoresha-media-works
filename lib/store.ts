import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  icon?: string;
  description?: string;
}

export interface Coupon {
  code: string;
  discountPercent: number;
}

interface CartStore {
  items: CartItem[];
  coupon: Coupon | null;
  isCartOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  clearCart: () => void;
  toggleCart: (isOpen?: boolean) => void;
}

const VALID_COUPONS: Record<string, number> = {
  'DIRECTOR20': 20,
  'NEXO10': 10,
  'GROWTH30': 30,
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      coupon: null,
      isCartOpen: false,

      addItem: (item) => {
        const items = get().items;
        const existingItem = items.find((i) => i.id === item.id);
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] });
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        });
      },

      applyCoupon: (code) => {
        const upperCode = code.toUpperCase().trim();
        if (VALID_COUPONS[upperCode] !== undefined) {
          set({
            coupon: {
              code: upperCode,
              discountPercent: VALID_COUPONS[upperCode],
            },
          });
          return true;
        }
        return false;
      },

      removeCoupon: () => set({ coupon: null }),

      clearCart: () => set({ items: [], coupon: null }),

      toggleCart: (isOpen) =>
        set((state) => ({ isCartOpen: isOpen !== undefined ? isOpen : !state.isCartOpen })),
    }),
    {
      name: 'nexoresha-cart-storage',
      partialize: (state) => ({
        items: state.items,
        coupon: state.coupon,
      }),
    }
  )
);
