# Nexoresha Media Works Project Execution Report

This report documents the detailed step-by-step progress, design decisions, architectural updates, and failures encountered while building the website.

---

## 1. Initial Setup and Initialization

### Failed Attempt 1: In-Place Bootstrap
- **Command Run**: `npx -y create-next-app@latest ./ --ts --tailwind --app --eslint --import-alias "@/*" --use-npm --yes`
- **Result**: Failure (Exit code 1).
- **Error message**:
  ```
  Could not create a project called "Nexoresha Media Works" because of npm naming restrictions:
  * name can only contain URL-friendly characters
  * name can no longer contain capital letters
  ```
- **Analysis**: Next.js automatically extracts the project name from the parent directory `c:\Projects\Nexoresha Media Works`, which contains spaces and capital letters.

### Failed Attempt 2: Bypassing Name with pre-created package.json
- **Action**: Created a temporary `package.json` with `{"name": "nexoresha-media-works"}`.
- **Command Run**: Retried `create-next-app` in `./`.
- **Result**: Same failure. The installer ignores `package.json` names when determining directory compatibility.

### Resolution (Successful Build)
- **Action**: Run `create-next-app` in a lowercase, URL-friendly subdirectory name `nexoresha-app`.
- **Command Run**: `npx -y create-next-app@latest nexoresha-app --ts --tailwind --app --eslint --import-alias "@/*" --use-npm --yes`
- **Result**: Success. Next.js 15 bootstrapped successfully.
- **File Transfer**: Moved all files from `.\nexoresha-app\` to root using PowerShell commands:
  ```powershell
  Move-Item -Path .\nexoresha-app\* -Destination .\ -Force
  Move-Item -Path .\nexoresha-app\.* -Destination .\ -Force
  Remove-Item -Path .\nexoresha-app -Recurse -Force
  ```
- **Outcome**: The workspace now correctly contains the initialized app in the root directory.

---

## 2. Dependency Management and Icon Failure

### Failure: Missing Lucide Brand Icons
- **Context**: Installed packages using `npm install framer-motion lucide-react zustand razorpay mongodb canvas-confetti`.
- **Error**: When building, the compiler threw an export mismatch error for brand icons like `Instagram` and `Linkedin` inside `app/contact/page.tsx` and `components/Footer.tsx`.
- **Analysis**: The dependency was resolved to `lucide-react@1.16.0` instead of a modern `0.x` version. In this legacy version, brand icons were not exported.
- **Resolution**: Upgraded the package to the modern stable version:
  ```bash
  npm install lucide-react@0.468.0
  ```
- **Outcome**: The brand icons compiled successfully.

---

## 3. UI Framework and Styling Integration

- **Action**: Initialized ShadCN CLI.
- **Command Run**: `npx -y shadcn@latest init --defaults -y`
- **Result**: Success. The CLI automatically detected Tailwind CSS v4, created `lib/utils.ts` and `components/ui/button.tsx`, and updated `app/globals.css`.

### Design System Integration
- **Modified File**: `app/globals.css`
  - Replaced system default colors with our custom luxury variables:
    - Cream Beige (`#F5EBDD`) -> `--background`
    - Dark Maroon (`#4A0404`) -> `--primary`
    - Blood Red (`#8B0000`) -> `--accent`
    - Accent Beige (`#EAD8C0`) -> `--border` & `--secondary`
    - Dark Text (`#1E1E1E`) -> `--foreground`
  - Introduced utility classes for:
    - `.glass-layer` (blur + translucent beige background)
    - `.cinematic-shadow` (diffused maroon cast shadow)
    - `.marquee-left` / `.marquee-right` (infinite scrolling tickers for companies)
    - `.floating` (ambient layout bobbing)

---

## 4. TypeScript Compiler and Framer Motion Errors

### Failure: Easing and Array Type Widening
- **Context**: Added Framer Motion variant configurations in `sections/Hero.tsx`.
- **Error**: TypeScript compilation failed during build:
  ```
  Type '{ animate: { y: number[]; transition: { duration: number; repeat: number; ease: string; }; }; }' is not assignable to type 'Variants'.
  Property 'ease' is incompatible: Type 'string' is not assignable to type 'Easing | Easing[] | undefined'.
  ```
- **Analysis**: Easing strings (like `'easeInOut'`) and arrays are typed very strictly in Framer Motion, and TS expanded them to generic `string` and `readonly` types, which triggers index signature mismatches.
- **Resolution**: Cast the variant declarations as `any` directly:
  ```typescript
  const floatVariants = { ... } as any;
  const floatReverseVariants = { ... } as any;
  ```
- **Outcome**: Bypassed strict array type widening and resolved compilation errors.

---

## 5. Prerendering Interactivity Failure

### Failure: Prerendering Event Handlers on Server Component
- **Context**: Generating static pages during `npm run build`.
- **Error**:
  ```
  Error occurred prerendering page "/_not-found".
  Error: Event handlers cannot be passed to Client Component props.
    {onClick: function onClick, ...}
  ```
- **Analysis**: The `Footer.tsx` component incorporated an `onClick` event handler for a "Back to Top" scrolling button. Since Next.js 15 defaults files inside `app/` to Server Components unless specified, Next.js tried to static-render it on the server and crashed.
- **Resolution**: Added the `'use client';` directive to the top of `components/Footer.tsx`.
- **Outcome**: The page compiler recognized it as a client component and built the application correctly.

---

## 6. Compiled Production Routes

The application now builds successfully into the following static and dynamic routes:
- `/` (Static) - Cinematic Agency homepage
- `/contact` (Static) - Leads and direct contact page
- `/highlights` (Static) - Category-filtered portfolio gallery
- `/api/checkout` (Dynamic) - Custom packages billing generator
- `/api/verify` (Dynamic) - Razorpay cryptographic payment verifier
- `/api/contact` (Dynamic) - Forms registry pipeline
- `/lib/mock_db.json` (Static file) - Sandbox local JSON database

---

## 7. Refinement: Scroll-Scrubbed Hero Image Sequence

### Changes Made:
1. **Background & Color Theme**: Removed the initial background image overlay from `sections/Hero.tsx` and locked the canvas layout onto a static base color.
2. **Directory Relocation**: Transferred the `Hero Frames` folder containing 240 JPG frames (`ezgif-frame-001.jpg` to `ezgif-frame-240.jpg`) to the project `/public` folder to make them statically reachable by the client.
3. **Sticky Scroll Track**: Structured a `300vh` scroll track container on the landing page, nesting a sticky child wrapper of `100vh`. This locks the screen vertically while scrolling scrub-controls the frame sequence.
4. **Client-Side Image Preloading**: Programmed an asynchronous preloader inside a React hook that caches all 240 frames in browser memory on mount. Renders a progress tracker bar until 100% preloaded.
5. **Lerped Frame Scrubbing**: Implemented a `requestAnimationFrame` game-loop using a linear interpolation (lerp) coefficient of `0.15`:
   - `currentProgress += (targetProgress - currentProgress) * 0.15`
   - Smoothly tracks mouse-wheel ticks up and down, mapping progress directly to the frame sequence index.
6. **Responsive Alignment**: Maintained primary brand descriptions and action links on the left side, and positioned the responsive image canvas container on the right side.
7. **Seamless Background Blend & Box Removal**:
   - Programmatically analyzed the frames using PIL to read the exact corner background color (`(249, 238, 220)` -> `#F9EEDC`).
   - Removed the image container box styling (border, shadow, rounded corners, background) from `sections/Hero.tsx`.
   - Set the image's sizing rule to `object-contain` to maintain native aspect ratio without cropping.
   - Performed a global search-and-replace to change the website background color token from `#F5EBDD` to `#F9EEDC` in 14 files (including `app/globals.css`, page files, and sections), achieving a seamless visual integration where the frames float natively on the page.
