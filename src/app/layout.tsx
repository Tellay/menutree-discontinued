import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Header } from '@/components/Header'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Menutree: Your restaurant in one link. Just a QRCode away.',
  description: 'Your restaurant in one link. Just a QRCode away.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
