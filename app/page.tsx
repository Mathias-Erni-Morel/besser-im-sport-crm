
'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMsg(error.message);
      return;
    }
    router.push('/dashboard');
  }

  return (
    <main>
      <h1 style={{ marginBottom: 16 }}>Anmeldung</h1>
      <form onSubmit={handleLogin} style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
        <label>
          E-Mail
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 6 }}
          />
        </label>
        <label>
          Passwort
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 6 }}
          />
        </label>
        <button type="submit" style={{ padding: 10, borderRadius: 6, border: '1px solid #111' }}>
          Einloggen
        </button>
        {msg && <p style={{ color: 'crimson' }}>{msg}</p>}
      </form>
    </main>
  );
}
