import Link from 'next/link'
import useSWR from 'swr'
import { getMountains } from '@/lib/firebase/firestore/mountains'

const fetcher = async () => {
  const data = await getMountains()
  return data
}

const MountainsGrid = () => {
  const { data: mountains, error } = useSWR('mountains', fetcher)

  if (error) return <p>Error loading mountains</p>

  if (!mountains) return <p>Loading...</p>

  return (
    <section className="h-screen w-screen bg-black text-white">
      {mountains.map((mountain) => {
        return (
          <Link href={`/mountains/${mountain.slug}`} key={mountain.id}>
            <div >
              <h1>
                {mountain.englishName}
              </h1>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default MountainsGrid
