import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full text-black border-b border-black p-3 text-sm">
      <div className='relative flex justify-between'>
        <p className="">
          百名山
        </p>
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-4">
          <Link href="/history" className="uppercase rounded-2xl border-black border py-1 px-3 text-sm">History</Link>
          <Link href="/mountains" className="uppercase rounded-2xl border-black border py-1 px-3 text-sm">Mountains</Link>
        </nav>
        <p className="">
          Login
        </p>
      </div>
    </header>
  );
}

export default Header
