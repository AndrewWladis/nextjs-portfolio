import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrew Wladis',
  description: "Andrew Wladis' Software Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/icon.png'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
