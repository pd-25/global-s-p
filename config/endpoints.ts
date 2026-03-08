export const endpoints = {
    auth: {
        login: '/auth/token',
    },
    categories: {
        list: '/categories/',
        create: '/categories/',
        update: (id: number | string) => `/categories/${id}`,
        delete: (id: number | string) => `/categories/${id}`,
        getById: (id: number | string) => `/categories/${id}`,
    },
    suppliers: {
        list: '/suppliers',
        create: '/suppliers',
        update: (id: number | string) => `/suppliers/${id}`,
        delete: (id: number | string) => `/suppliers/${id}`,
        getById: (id: number | string) => `/suppliers/${id}`,
    },
    quotes: {
        list: '/quotes',
        create: '/quotes',
        update: (id: number | string) => `/quotes/${id}`,
        delete: (id: number | string) => `/quotes/${id}`,
        getById: (id: number | string) => `/quotes/${id}`,
    },
    products: {
        list: '/products',
        create: '/products',
        update: (id: number | string) => `/products/${id}`,
        delete: (id: number | string) => `/products/${id}`,
        getById: (id: number | string) => `/products/${id}`,
    },
}