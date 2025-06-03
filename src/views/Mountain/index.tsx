import ClimbingRoutes from './components/ClimbingRoutes'
import CurrentConditions from './components/CurrentConditions'
import Gallery from './components/Gallery'
import MountainHero from './components/Hero'
import PlanningTools from './components/PlanningTools'
import RecentActivity from './components/RecentActivity'
import Stats from './components/Stats'
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
      <div className="z-10 mx-auto mb-[-60vh] w-full translate-y-[60vh]">
        <div className='bg-black px-5'>
          <div className='mx-auto max-w-7xl px-5'>
            <div className='h-20' />
            <MountainTitle englishName={englishName} elevation={elevation}/>
            <div className='h-20' />
          </div>
        </div>

        <div className="min-h-screen bg-black text-white">
          <Stats elevation={elevation} />
          <CurrentConditions />
          <ClimbingRoutes />
          <RecentActivity />
          <Gallery />
          <PlanningTools />
        </div>

        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default MountainView
