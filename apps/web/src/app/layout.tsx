import '~/styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'in.orbit',
  icons: [{ rel: 'icon', url: '/icon.svg' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
