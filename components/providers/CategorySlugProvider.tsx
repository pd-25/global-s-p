"use client"
import React, { createContext, useContext } from 'react';

const CategorySlugContext = createContext<string>('');

export function CategorySlugProvider({ slug, children }: { slug: string, children: React.ReactNode }) {
  return <CategorySlugContext.Provider value={slug}>{children}</CategorySlugContext.Provider>;
}

export function useCategorySlug() {
  return useContext(CategorySlugContext);
}
