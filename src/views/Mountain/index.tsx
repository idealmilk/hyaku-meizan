
import MountainHero from './components/Hero'
import MountainTitle from './components/Title'

import type { TMountain } from '@/interfaces/mountains'

import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const MountainView = ({ englishName, elevation, image }: TMountain) => {
  return (
    <div className='w-screen'>
      <Header />
      <MountainHero englishName={englishName} image={image} />
      <div className="z-10 mx-auto mb-[-60vh] w-full  translate-y-[60vh] ">
        <div className=' bg-black px-5'>
          <div className='mx-auto max-w-7xl px-5'>
            <div className='h-20' />
            <MountainTitle englishName={englishName} elevation={elevation}/>
            <div className='h-20' />
          </div>
        </div>

        <CTA />

        <Footer />
      </div>
    </div>
  )
}

export default MountainView
