import type { ReactNode } from 'react'

import Header from '@/components/Header'

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Header />
      {children}    
    </main>
  )
}

export default Layout