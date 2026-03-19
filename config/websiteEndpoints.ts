export const websiteEndpoints = {
    recommendedProducts: 'website/products/recomended-products',
    categoryWiseSubcategories: 'website/categories/category-wise-subcategories',
    valuablePartners: 'website/suppliers/valuable-partners',
    /** Category-specific listing: replace {categorySlug} with the actual slug */
    productListing: 'website/products/{categorySlug}',
    /** Global listing (no category filter) */
    productListingGlobal: 'website/products',
    countries: 'website/countries',
    supplierTypes: 'website/supplier-types', // <-- New endpoint for supplier types
    fetchContactFormData: "website/enquiries/fetch-product-supplier-data",
    createEnquiry: "website/enquiries/create",
    productDetails: "website/products/product/{slug}",

};
