
# Besser-im-Sport CRM – Minimal (Next.js + Supabase Auth)

Dies ist ein **minimal lauffähiges** Frontend mit **Supabase Auth (E-Mail + Passwort)**:
- Login-Seite (`/`) mit E-Mail/Passwort
- Geschütztes Dashboard (`/dashboard`) – nur mit gültiger Session erreichbar
- Schutz via `middleware.ts` (redirect auf `/` wenn nicht eingeloggt)

## Erforderliche Umgebungsvariablen (lokal & auf Vercel)

In Vercel → Project Settings → **Environment Variables**:

- `NEXT_PUBLIC_SUPABASE_URL` = (Supabase Projekt URL)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (anon public key)

## Lokaler Start

```bash
npm install
npm run dev
```

Dann öffnen: http://localhost:3000

## Deployment (Vercel)

1. Code ins Repo pushen (z. B. `Mathias-Erni-Morel/besser-im-sport-crm`)
2. In Vercel das Repo importieren oder verbinden
3. In **Settings → Environment Variables** die zwei Variablen setzen
4. **Deploy**

