
import Hero from './components/Hero'
import Mountains from './components/Mountains'
import RecentClimbs from './components/RecentClimbs'
import Stats from './components/Stats'
import Title from './components/Title'

import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


const HomeView = () => {  
  return (
    <div className='w-screen'>
      <Header />
      <Hero />
      <div className="z-10 mx-auto mb-[-60vh] w-full  translate-y-[60vh] ">
        <div className=' bg-black px-5'>
          <div className='mx-auto max-w-7xl px-5'>
            <div className='h-20' />
            <Title />
            <div className='h-20' />
            <Stats />
            <div className='h-20' />
            <Mountains />
          </div>
          <div className='h-20' />
        </div>
        <div className='bg-white'>
          <div className='mx-auto max-w-7xl px-5'>
            <div className='h-20' />
            <RecentClimbs />
            <div className='h-20' />
          </div>
        </div>
        <div className='bg-yellow'>
          <div className='mx-auto max-w-7xl px-5'>
            <CTA />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default HomeView