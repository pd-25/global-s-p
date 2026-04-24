import LeadsTable from '@/components/sections/admin/leads/LeadsTable';

interface LeadPageProps {
  params: Promise<{ leadType: string }>;
}

export default async function LeadPage({ params }: LeadPageProps) {
  const { leadType } = await params;

  return <LeadsTable leadType={leadType} />;
}
