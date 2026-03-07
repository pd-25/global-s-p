import ProductsManager from '@/components/sections/admin/products/ProductsManager';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Global Source Export',
  description: 'Manage global marketplace product inventory.',
};

export default function ProductsPage() {
  return <ProductsManager />;
}
