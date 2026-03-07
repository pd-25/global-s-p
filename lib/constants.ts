import { adminRoutes, routes } from "@/config/routes";

export const navLinks = [
  { name: "Get Quote", href: routes.getQuotePage },
  { name: "Request Hub", href: routes.requestHubPage },
  { name: "Products & Services", href: routes.productsServicesPage },
  { name: "About us", href: routes.aboutPage },
]

export const pages = [
  { name: 'Dashboard', path: adminRoutes.dashboard, icon: 'dashboard' },
  { name: 'Products', path: adminRoutes.productsPage, icon: 'inventory_2' },
  { name: 'Categories', path: adminRoutes.categoryPage, icon: 'category' },
  { name: 'Leads', path: adminRoutes.leadsPage, icon: 'leaderboard' },
  { name: 'Quotes', path: adminRoutes.quotePage, icon: 'assignment' },
];