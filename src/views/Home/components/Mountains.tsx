import Image from 'next/image'
import Link from 'next/link'
import useSWR, { Fetcher } from 'swr'

import { Button } from '@/components/ui/button'
import { TMountain } from '@/interfaces/mountains'
import { getMountains } from '@/lib/firebase/firestore/mountains'

const fetcher: Fetcher<TMountain[], [string, number]> = async ([ , limit ]) => {
  return await getMountains(limit)
}

const Mountains = () => {
  const { data: mountains, error } = useSWR([ '/api/popular-mountains', 4 ], fetcher)

  if (error) return <p>Error loading mountains</p>

  if (!mountains) return <p>Loading...</p>

  return (
    <section className='items-center'>
      <div className="flex justify-between">
        {
          mountains.map((mountain) => {
            const tempImageUrl = mountain.image.replace(/^\/static/, '')
          
            return (
              <Link
                href={`/mountains/${mountain.slug}`} 
                key={mountain.id}
              >
                <div >
                  <h1>{mountain.englishName}</h1>
                  <div className='cursor-pointer transition-opacity ease-in-out hover:opacity-30'>
                    <div className="relative h-[160px] w-[240px]">
                      <Image
                        src={tempImageUrl}
                        alt={mountain.englishName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            )
          
          })
        }
      </div>
      <div className='h-10' />
      <div className='flex w-full justify-center'>
        <Button variant="outline">
          View All
        </Button>
      </div>
    </section>
  )
}

export default Mountains
