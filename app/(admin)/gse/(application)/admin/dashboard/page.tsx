import DashboardAdminContent from '@/components/sections/admin/dashboard/DashboardAdminContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Global Source Export',
  description: 'Admin dashboard overview.',
};

export default function DashboardPage() {
  return <DashboardAdminContent />;
}
