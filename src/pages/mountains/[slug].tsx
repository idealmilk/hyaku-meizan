import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import { getMountainBySlug } from '@/lib/firebase/firestore/mountains'
import MountainView from '@/views/Mountain'

export const fetcher = (slug: string) => {
  return getMountainBySlug(slug)
}

const MountainPage = () => {
  const router = useRouter()

  const { slug } = router.query

  const { data: mountain, error } = useSWR(slug ? slug : null, fetcher)

  if (error) return <div>Error loading mountain data</div>

  if (!mountain) return <div>Loading...</div>

  return (
    <Layout>
      <MountainView mountain={mountain} />
    </Layout>
  )
}

export default MountainPage
