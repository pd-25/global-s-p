import { adminRoutes, routes } from "@/config/routes";

export const navLinks = [
  { name: "Get Quote", href: routes.getQuotePage },
  { name: "Request Hub", href: routes.requestHubPage },
  { name: "Products&Services", href: routes.productsServicesPage },
  { name: "About us", href: routes.aboutPage },
]

export const pages = [
  { name: 'Dashboard', path: adminRoutes.dashboard, icon: 'dashboard' },
  { name: 'Products', path: '/gse/admin/products', icon: 'inventory_2' },
  // { name: 'Categories', path: '/gse/admin/categories', icon: 'category' },
  { name: 'Leads', path: '/gse/admin/leads', icon: 'leaderboard' },
  { name: 'Quotes', path: '/gse/admin/quotes', icon: 'assignment' },
];