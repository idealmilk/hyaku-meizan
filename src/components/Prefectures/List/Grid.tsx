import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import Link from 'next/link'
import type { TMountain } from '@/interfaces/mountains'

type GridProps = {
  mountains: TMountain[]
  featuredMountain?: TMountain
  setFeaturedMountain: Dispatch<SetStateAction<TMountain | undefined>>
}

const Grid = ({ mountains, featuredMountain, setFeaturedMountain }: GridProps) => {
  return (
    <div className="grid w-3/5 grid-cols-3 gap-2">
      {mountains.map((mountain: TMountain) => {
        const isFeatured = mountain === featuredMountain

        return (
          <Link
            href={`/mountains/${mountain.slug}`} 
            key={mountain.id}
            onMouseOver={() => setFeaturedMountain(mountain)}
            onMouseLeave={() => setFeaturedMountain(undefined)}
          >
            <div >
              <h1>{mountain.englishName}</h1>
              <div className={`cursor-pointer transition-opacity ease-in-out ${featuredMountain && !isFeatured && 'opacity-30'}`}>
                <Image
                  src={mountain.image}
                  alt={mountain.englishName}
                  width={300}
                  height={200}
                  style={{ objectFit: 'fill' }}
                />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Grid
