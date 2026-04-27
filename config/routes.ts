export const routes = {
    home: "/",
    aboutPage: "/about",
    contactPage: "/contact",
    productsServicesPage: "/products-services",
    productsServicesDetailsPage: "/products-services/[slug]",
    productListPage: "/products-services/products",
    serviceProductListPage: "/products-services/products/[categoryId]",
    getQuotePage: "/get-quote",
    requestHubPage: "/request-hub",
    supplierContactPage: "/contact/supplier/[slug]",
    productContactPage: "/contact/product/[slug]",
    productDetails: "/product-details/[slug]",
    getQuoteForm: "/get-quote/form",
    registerCompany: "/suppliers/register-new-company",
    termsAndConditionsPage: "/terms-and-conditions",
    faqPage: "/faq",
    privacyPolicyPage: "/privacy-policy",
    eWastePolicyPage: "/e-waste",
    returnCancelPolicyPage: "/return-cancel-policy",
    store: "/store",
    connectWithUsPage: "/connect-with-us",

}

export const adminRoutes = {
    login: "/gse/login",
    dashboard: "/gse/admin/dashboard",
    categoryPage: "/gse/admin/categories",
    quotePage: "/gse/admin/quotes",
    countryPage: "/gse/admin/countries",
    leadPage: "/gse/admin/leads/[leadType]",
}