'use client';

import React from 'react';
import { AuthProvider } from '@/lib/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import RequireAuth from '@/components/dashboard/layout/RequireAuth';

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <RequireAuth>
        <DashboardLayout>{children}</DashboardLayout>
      </RequireAuth>
    </AuthProvider>
  );
}
