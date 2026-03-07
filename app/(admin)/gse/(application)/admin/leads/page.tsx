import LeadsManager from '@/components/sections/admin/leads/LeadsManager';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Leads | Global Source Export',
    description: 'Manage potential buyers and suppliers leads.',
};

export default function LeadsPage() {
    return <LeadsManager />;
}
