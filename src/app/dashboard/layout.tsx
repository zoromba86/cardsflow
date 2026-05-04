'use client';

import React from 'react';
import { AuthProvider } from '@/lib/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthProvider>
  );
}
