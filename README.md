# Kenavid Couture

Kenavid Couture is a premium e-commerce web application designed for a high-end fashion brand. Built with React, TypeScript, TanStack Start, and Vite, it offers a seamless shopping experience with a focus on performance and elegant UI.

## 🚀 Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop views.
- **Product Catalog:** Dynamic browsing of fashion collections with filtering and sorting.
- **Shopping Cart:** Real-time cart management with persistent storage.
- **Secure Checkout:** Integrated payment gateway simulation.
- **User Authentication:** Secure login and profile management.
- **Performance:** Fast load times powered by Vite and optimized asset delivery.

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Framework:** TanStack Start (SSR)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Linting:** ESLint (Type-aware configuration)

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Joshua/Kenavid-Couture.git
   cd Kenavid-Couture
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deploy to Vercel

This project is configured for seamless deployment on Vercel:

1. Push your code to a GitHub repository.
2. Import the repository in the [Vercel Dashboard](https://vercel.com/dashboard).
3. Vercel will auto-detect the TanStack Start framework preset.
4. Click **Deploy**.

> **Note:** The `vercel.json` is intentionally left empty (`{}`) so that TanStack Start's Vercel preset handles routing and SSR automatically.

## 📁 Project Structure

- `/src/components`: Reusable UI components.
- `/src/routes`: TanStack Router file-based routes.
- `/src/hooks`: Custom React hooks for logic reuse.
- `/src/assets`: Images, fonts, and global styles.
- `/public`: Static files served at the root (robots.txt, sitemap.xml, favicon, logo).

## 📄 License

This project is licensed under the MIT License.
