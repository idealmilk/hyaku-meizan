import { useState } from 'react'
import useSWR from 'swr'

import Featured from './Featured'
import MountainsFilter from './Filter'
import Grid from './Grid'

import type { TMountain, TMountainFilter } from '@/interfaces/mountains'
import { getMountains } from '@/lib/firebase/firestore/mountains'

const fetcher = async (_: string, filter: TMountainFilter) => {
  const data = await getMountains(filter)
  return data
}

const MountainList = () => {
  const [ filters, setFilters ] = useState<TMountainFilter>({})
  const [ featuredMountain, setFeaturedMountain ] = useState<TMountain | undefined>()

  const { data: mountains, error } = useSWR([ 'mountains', [ filters ]], fetcher)

  if (error) return <p>Error loading mountains</p>

  if (!mountains) return <p>Loading...</p>

  return (
    <section className="relative flex w-full justify-between pl-40 pr-10 pt-20">
      <div className='w-3/5'>
        <MountainsFilter setFilters={setFilters}/>

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
