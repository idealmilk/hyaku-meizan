import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  
  return (
    <footer className="z-10 h-80 w-full max-w-[1440px] bg-black px-5 py-20 text-sm text-white">
      <div className='flex justify-between'>
        <p>百名山</p>
        
        <div className='flex gap-10'>
          <nav className="flex w-48 flex-col gap-2">
            <Link href="/history" className={`px-3 py-1 text-sm transition-all hover:text-white/60 ${router.pathname.includes('/history') && 'text-white/60'}`}>History</Link>
            <Link href="/mountains" className={`px-3 py-1 text-sm transition-all hover:text-white/60 ${router.pathname.includes('/mountains') && 'text-white/60'}`}>Mountains</Link>
            <Link href="/mountains" className={`px-3 py-1 text-sm transition-all hover:text-white/60 ${router.pathname.includes('/map') && 'text-white/60'}`}>Map</Link>
          </nav>
          <nav className="flex w-48 flex-col gap-2">
            <Link href="/history" className={`px-3 py-1 text-sm uppercase  transition-all hover:text-white/60 ${router.pathname.includes('/history') && 'text-white/60'}`}>History</Link>
            <Link href="/mountains" className={`px-3 py-1 text-sm uppercase  transition-all hover:text-white/60 ${router.pathname.includes('/mountains') && 'text-white/60'}`}>Mountains</Link>
          </nav>
        </div>
      </div>
    </footer>

  )
}

export default Footer
