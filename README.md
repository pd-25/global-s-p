# GLOBAL Lead Generation Platform

A **GLOBAL Lead Generation Platform** and **Domestic E-Commerce Platform** enabling users in the **UK, Bangladesh, India**, and other regions to browse products/services and submit leads.

## Tech Stack

| Layer      | Technology                  |
|------------|----------------------------|
| Frontend   | Next.js 16, Tailwind CSS   |
| Backend    | FastAPI, MySQL             |
| Rendering  | Server-Side Rendering (SSR)|

## 📖 Documentation

- **[Project Plan & Folder Structure](./plan.md)** - Architecture decisions, folder structure, and implementation details

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd global-s-p
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**  
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
global-s-p/
├── app/                # Next.js App Router (pages)
├── components/         # Reusable UI components
├── lib/                # Utilities & API client
├── types/              # TypeScript definitions
├── styles/             # Shared CSS
└── public/             # Static assets
```

See [plan.md](./plan.md) for detailed folder structure.

## 🌐 Pages

- **Homepage** - Hero, banners, featured products
- **About Us** - Company information
- **Contact Us** - Lead capture form
- **Products & Services** - Product listings with categories
- **Product Single** - Individual product details

## 🔧 Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Start development server       |
| `npm run build`   | Build for production           |
| `npm run start`   | Start production server        |
| `npm run lint`    | Run ESLint                     |

## 📝 License

Private - All rights reserved.
