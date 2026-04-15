export const endpoints = {
    auth: {
        login: 'admin/auth/token',
    },
    categories: {
        list: 'admin/categories/',
        create: 'admin/categories/',
        update: (id: number | string) => `admin/categories/${id}`,
        delete: (id: number | string) => `admin/categories/${id}`,
        getById: (id: number | string) => `admin/categories/${id}`,
    },
    suppliers: {
        list: 'admin/suppliers/',
        create: 'admin/suppliers/',
        update: (id: number | string) => `admin/suppliers/${id}`,
        delete: (id: number | string) => `admin/suppliers/${id}`,
        getById: (id: number | string) => `admin/suppliers/${id}`,
    },
    quotes: {
        list: 'admin/quotes/',
        create: 'admin/quotes/',
        update: (id: number | string) => `admin/quotes/${id}`,
        delete: (id: number | string) => `admin/quotes/${id}`,
        getById: (id: number | string) => `admin/quotes/${id}`,
    },
    products: {
        list: 'admin/products/',
        create: 'admin/products/',
        update: (id: number | string) => `admin/products/${id}`,
        delete: (id: number | string) => `admin/products/${id}`,
        getById: (id: number | string) => `admin/products/${id}`,
    },
    countries: {
        list: 'admin/countries/',
        create: 'admin/countries/',
        update: (id: number | string) => `admin/countries/${id}`,
        delete: (id: number | string) => `admin/countries/${id}`,
        getById: (id: number | string) => `admin/countries/${id}`,
    },
}