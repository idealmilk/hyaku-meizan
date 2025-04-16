import { useEffect, useState } from 'react'
import useSWR from 'swr'

import type { TMountain } from '@/interfaces/mountains'
import { getMountains } from '@/lib/firebase/firestore/mountains'

const fetcher = () => {
  return getMountains()
}

export const useMountainsFilter = () => {
  const { data: mountains, error } = useSWR('mountains', fetcher)
  const [ elevationRange, setElevationRange ] = useState<[number, number]>([ 0, 4000 ])
  const [ selectedPrefectures, setSelectedPrefectures ] = useState<string[]>([])
  const [ filteredMountains, setFilteredMountains ] = useState<TMountain[]>([])

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

  useEffect(() => {
    if (mountains) {
      setFilteredMountains(mountains)
    }
  }, [ mountains ])

  return {
    filteredMountains,
    error,
    handleApply,
    elevationRange,
    setElevationRange,
    selectedPrefectures,
    setSelectedPrefectures, 
  }
}
