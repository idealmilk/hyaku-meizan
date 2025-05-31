import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import AccountSettingsView from '@/views/AccountSettings'

const AccountSettingsPage = () => {
  return (
    <Layout>
      <PageHeader title="Account Settings" />
      <AccountSettingsView />
    </Layout>
  )
}

export default AccountSettingsPage