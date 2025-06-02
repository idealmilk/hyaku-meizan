import { useRouter } from 'next/router'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

const CTA = () => {
  const router = useRouter()
  const { user } = useAuth()

  if (user) {
    return
  }

  return (
    <section className='bg-yellow'>
      <div className='mx-auto max-w-7xl px-5'>
        <div className="w-full px-40 py-20 text-black">
          <div className='mx-auto flex w-[520px] flex-col items-center gap-3 text-center'>
            <p className='text-4xl font-bold'>Join the 100. Start climbing</p>
            <p className='font-semibold'>Track your hyakumeizan journey and explore legendary peaks</p>
            <Button className='w-fit' onClick={() => {router.push('/register')}}>
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
