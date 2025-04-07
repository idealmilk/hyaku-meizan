import Layout from '@/components/Layout'
import MountainList from '@/components/Mountains/List'
import PageHeader from '@/components/PageHeader'

const MountainsPage = () => {
  return (
    <Layout>
      <PageHeader title="Mountains" />
      <MountainList />
    </Layout>
  )
}

export default MountainsPage