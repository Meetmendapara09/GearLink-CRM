
'use client';

import { redirect } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

export default function RootPage() {
  const { user } = useAuth();
  if (user) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
