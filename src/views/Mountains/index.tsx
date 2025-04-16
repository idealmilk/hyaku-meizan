import { useState } from 'react'

import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'

import Featured from './components/Featured'
import MountainsFilter from './components/Filter'
import Grid from './components/Grid'
import { useMountainsFilter } from './hooks/useMountainsFilter'

import type { TMountain } from '@/interfaces/mountains'

const MountainsView = () => {
  const [ featuredMountain, setFeaturedMountain ] = useState<TMountain | undefined>()

  const {
    filteredMountains,
    error,
    handleApply,
    elevationRange,
    setElevationRange,
    selectedPrefectures,
    setSelectedPrefectures,
  } = useMountainsFilter()


  if (error) return <p>Error loading mountains</p>

  if (!filteredMountains) return <p>Loading...</p>
  
  return (
    <Layout>
      <PageHeader title="Mountains" />
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
    </Layout>
  )
}

export default MountainsView