import type { ReactNode } from 'react'

import Header from '@/components/Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex w-full grow flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout