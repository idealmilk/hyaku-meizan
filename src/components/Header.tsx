import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full border-b border-black p-3 text-sm text-black">
      <div className='relative flex justify-between'>
        <p className="">
          百名山
        </p>
        <nav className="absolute left-1/2 flex -translate-x-1/2 gap-4">
          <Link href="/history" className="rounded-2xl border border-black px-3 py-1 text-sm uppercase">History</Link>
          <Link href="/mountains" className="rounded-2xl border border-black px-3 py-1 text-sm uppercase">Mountains</Link>
        </nav>
        <p className="">
          Login
        </p>
      </div>
    </header>
  )
}

export default Header
