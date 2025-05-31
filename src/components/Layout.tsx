
import Footer from './Footer'
import Header from './Header'

import type { ReactNode } from 'react'

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