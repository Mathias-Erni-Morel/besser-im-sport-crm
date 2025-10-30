
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Besser-im-Sport CRM',
  description: 'Minimal CRM Login + Dashboard'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ fontFamily: 'system-ui, Arial, sans-serif', padding: 24, maxWidth: 800, margin: '0 auto' }}>
        {children}
      </body>
    </html>
  );
}
