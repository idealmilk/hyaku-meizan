import Mountains from '@/data/mountains.json'
import Grid from './Grid';
import Featured from './Featured';
import { useState } from 'react';

const MountainList = () => {
  const [ featuredMountain, setFeaturedMountain ] = useState<TMountain | undefined>()

  return (
    <section className="h-screen w-full flex justify-between pt-20 pl-40 pr-10">
      <Grid 
        mountains={Mountains}
        featuredMountain={featuredMountain}
        setFeaturedMountain={setFeaturedMountain}
      />
      <Featured featuredMountain={featuredMountain} />
    </section>
  );
}

export default MountainList
