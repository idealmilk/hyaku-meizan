import { useCallback, useState } from 'react'

import useSWR from 'swr'
import Featured from './Featured'
import MountainsFilter from './Filter'
import Grid from './Grid'

import type { TMountain } from '@/interfaces/mountains'
import { getMountains } from '@/lib/firebase/firestore/mountains'

// const fetcher = async () => {
//   const data = await getMountains()
//   return data
// }

const MountainList = () => {
  const [ featuredMountain, setFeaturedMountain ] = useState<TMountain | undefined>()
  const [ elevationRange, setElevationRange ] = useState<[number, number]>([ 0, 4000 ])


  const fetcher = useCallback(async () => {
    const [ minElevation, maxElevation ] = elevationRange
    return await getMountains({ minElevation, maxElevation })
  }, [ elevationRange ])

  const {
    data: mountains, error, mutate, 
  } = useSWR('mountains', fetcher)


  if (error) return <p>Error loading mountains</p>

  if (!mountains) return <p>Loading...</p>

  return (
    <section className="relative flex w-full justify-between pl-40 pr-10 pt-20">
      <div className='w-3/5'>
        <MountainsFilter
          mutate={mutate}
          elevationRange={elevationRange}
          setElevationRange={setElevationRange}
        />

        <Grid 
          mountains={mountains}
          featuredMountain={featuredMountain}
          setFeaturedMountain={setFeaturedMountain}
        />
      </div>
      <Featured featuredMountain={featuredMountain} />
    </section>
  )
}

export default MountainList
