import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leads | Global Source Export',
  description: 'Manage leads and inquiries from potential customers.',
};

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div>main page</div>
    {children}
    </>
  );
}
