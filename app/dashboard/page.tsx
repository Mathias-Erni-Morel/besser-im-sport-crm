
'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/');
      } else {
        setEmail(session.user?.email ?? null);
      }
    });
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/');
  }

  return (
    <main>
      <h1 style={{ marginBottom: 16 }}>Dashboard</h1>
      <p style={{ marginBottom: 16 }}>Eingeloggt als: <strong>{email ?? '...'}</strong></p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
        <a href="#" style={{ padding: 16, border: '1px solid #ddd', borderRadius: 10 }}>Athleten</a>
        <a href="#" style={{ padding: 16, border: '1px solid #ddd', borderRadius: 10 }}>To‑dos</a>
        <a href="#" style={{ padding: 16, border: '1px solid #ddd', borderRadius: 10 }}>Outreach‑Entwürfe</a>
        <a href="#" style={{ padding: 16, border: '1px solid #ddd', borderRadius: 10 }}>Einstellungen</a>
      </div>
      <button onClick={handleLogout} style={{ marginTop: 24, padding: 10, borderRadius: 6, border: '1px solid #111' }}>
        Logout
      </button>
    </main>
  );
}
