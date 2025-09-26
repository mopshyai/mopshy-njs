import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  )
}