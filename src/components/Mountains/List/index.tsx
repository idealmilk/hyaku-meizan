import { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'

import Featured from './Featured'
import MountainsFilter from './Filter'
import Grid from './Grid'

import type { TMountain } from '@/interfaces/mountains'
import { getMountains } from '@/lib/firebase/firestore/mountains'

const fetcher = () => {
  return getMountains()
}

const MountainList = () => {
  const { data: mountains, error } = useSWR('mountains', fetcher)
  const [ featuredMountain, setFeaturedMountain ] = useState<TMountain | undefined>()
  const [ elevationRange, setElevationRange ] = useState<[number, number]>([ 0, 4000 ])
  const [ selectedPrefectures, setSelectedPrefectures ] = useState<string[]>([])
  const [ filteredMountains, setFilteredMountains ] = useState<TMountain[]>([])


  useEffect(() => {
    if (mountains) {
      setFilteredMountains(mountains) // initially show all
    }
  }, [ mountains ])

  const handleApply = () => {
    if (!mountains) return

    const [ minElevation, maxElevation ] = elevationRange

    const result = mountains.filter((mountain) => {
      if (mountain.elevation < minElevation || mountain.elevation > maxElevation) {
        return false
      }

      if (
        selectedPrefectures.length > 0 && 
        (!Array.isArray(mountain.prefectures) ||
        !mountain.prefectures.some((ref) => selectedPrefectures.includes(ref.id)))
      ) {
        return false
      }

      return true
    })

    setFilteredMountains(result)
  }

  if (error) return <p>Error loading mountains</p>

  if (!filteredMountains) return <p>Loading...</p>

  return (
    <section className="relative flex w-full justify-between pl-40 pr-10 pt-20">
      <div className='w-3/5'>
        <MountainsFilter
          elevationRange={elevationRange}
          setElevationRange={setElevationRange}
          selectedPrefectures={selectedPrefectures}
          setSelectedPrefectures={setSelectedPrefectures}
          onApply={handleApply}
        />

        <Grid 
          mountains={filteredMountains}
          featuredMountain={featuredMountain}
          setFeaturedMountain={setFeaturedMountain}
        />
      </div>
      <Featured featuredMountain={featuredMountain} />
    </section>
  )
}

export default MountainList
