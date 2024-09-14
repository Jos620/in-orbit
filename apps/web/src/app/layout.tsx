import '~/styles/globals.css'

import type { Metadata } from 'next'
import { Dialog, DialogContent } from '~/components/ui/dialog'
import { CreateGoal } from './_components/create-goal'

export const metadata: Metadata = {
  title: 'in.orbit',
  icons: [{ rel: 'icon', url: '/icon.svg' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        <Dialog>
          {children}

          <DialogContent>
            <CreateGoal />
          </DialogContent>
        </Dialog>
      </body>
    </html>
  )
}
