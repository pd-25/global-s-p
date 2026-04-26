import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('registerCompany.connectWithUsPage');

  return {
    title: `${t('bannerTitle')} | Global S&P`,
    description: t('bannerSubtitle'),
    openGraph: {
      title: `${t('bannerTitle')} | Global S&P`,
      description: t('bannerSubtitle'),
    },
    twitter: {
      title: `${t('bannerTitle')} | Global S&P`,
      description: t('bannerSubtitle'),
    }
  };
}

export default function ConnectWithUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
