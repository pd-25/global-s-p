import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'bn'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: 'as-needed', // Only show locale prefix for non-default locales
});
