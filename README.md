# React Shop

A modern e-commerce frontend application built with React 19, TypeScript, and Vite. This project includes a public shop interface, user authentication, and a comprehensive admin dashboard.

## Features

- **Public Shop**: Browse products, filter by category/gender.
- **Authentication**: Login and Register functionality.
- **Admin Dashboard**: manage products and view analytics.
- **Modern UI**: Built with Tailwind CSS v4 and Shadcn UI components.
- **State Management**: Data fetching and caching with TanStack Query.
- **Routing**: Client-side routing with React Router v7.

## Backend

This frontend consumes the generic eShop backend API.

**IMPORTANT:** The backend repository is located here:
[https://github.com/4n-ch4n/eShop-nest-backend](https://github.com/4n-ch4n/eShop-nest-backend)

Please follow the instructions in the backend repository to set up and run the API server before starting this frontend application.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) & Axios
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Installation & Setup

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory based on `.env.template`:

   ```bash
   cp .env.template .env
   ```

   Update the `.env` file with your API URL:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Run the Development Server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── admin/          # Admin dashboard pages and components
│   ├── components/ # Admin-specific components (charts, stats, etc.)
│   ├── layouts/    # Admin layout wrapper
│   └── pages/      # Dashboard, Products, etc.
├── auth/           # Authentication modules
│   ├── layouts/    # Auth layout wrapper
│   └── pages/      # Login, Register pages
├── shop/           # Public shop interface
│   ├── components/ # Shop-specific components (ProductCard, Grid, etc.)
│   ├── layouts/    # Main shop layout
│   └── pages/      # Home, Product details, Gender categories
├── components/     # Shared UI components (Button, Input, etc.)
├── lib/            # Utilities and helper functions
├── mocks/          # Mock data for testing/development
└── assets/         # Static assets and images
```
