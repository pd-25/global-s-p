import { adminRoutes, routes } from "@/config/routes";
// export const API_BASE_URL = 'http://100.52.107.135:8000/api/v1';
export const API_BASE_URL = 'https://api.globalsourceexpoltd.com/api/v1';
export const LOGIN_PATH = '/gse/login';
export const ADMIN_PATH_PREFIX = '/gse/admin';
export const TOKEN_COOKIE_NAME = 'access_token';
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

export const languageList = [
  { name: 'English', locale: 'en', path: '/en' },
  { name: 'Bengali', locale: 'bn', path: '/bn' },
];



export const contactFormReason = [
  { name: 'Get price / quote' },
  { name: 'Get products / services details' },
  { name: 'Sell something to them' },
  { name: 'Other' },
]