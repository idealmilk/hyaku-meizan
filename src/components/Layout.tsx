import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import MountainsGrid from "@/components/Home/Mountains";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Header />
      {children}    
    </main>
  );
}

export default Layout