import { useRouter } from 'next/router'

import Mountains from '@/data/mountains'
import Layout from '@/components/Layout'
 
const MountainPage = () => {
  const router = useRouter()

  const mountain = Mountains.find((mountain) => mountain.slug === router.query.slug)

  return (
    <Layout>
      <h1>
        {mountain?.englishName}
      </h1>
    </Layout>
  )
}

export default MountainPage