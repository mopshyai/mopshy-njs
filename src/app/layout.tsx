// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Mopshy.ai - Enterprise AI Solutions',
//   description: 'Enterprise AI Solutions',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.className} bg-slate-950 text-white`}>
//         <Navbar />
//         <main className="pt-20">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mopshy.ai - Enterprise AI Solutions',
  description: 'Enterprise AI Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  )
}