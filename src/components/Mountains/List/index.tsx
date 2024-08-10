import { useState } from 'react'

import Mountains from '@/data/mountains.json'

import Featured from './Featured'
import Grid from './Grid'

import type { TMountain } from '@/interfaces/mountains'

const MountainList = () => {
  const [ featuredMountain, setFeaturedMountain ] = useState<TMountain | undefined>()

  return (
    <section className="flex h-screen w-full justify-between pl-40 pr-10 pt-20">
      <Grid 
        mountains={Mountains}
        featuredMountain={featuredMountain}
        setFeaturedMountain={setFeaturedMountain}
      />
      <Featured featuredMountain={featuredMountain} />
    </section>
  )
}

export default MountainList
