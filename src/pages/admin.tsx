import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import { uploadMountains } from '@/scripts/uploadMountains'
import { uploadPrefectures } from '@/scripts/uploadPrefectures'
import { uploadRegions } from '@/scripts/uploadRegions'

const AccountSettingsPage = () => {
  return (
    <Layout>
      <PageHeader title="Admin" />
      <button onClick={uploadPrefectures}>
        Upload prefectuers
      </button>
      <button onClick={uploadRegions}>
        Upload regions
      </button>
      <button onClick={uploadMountains}>
        Upload mountains
      </button>
    </Layout>
  )
}

export default AccountSettingsPage