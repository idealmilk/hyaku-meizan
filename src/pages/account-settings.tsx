import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import useProtected from '@/hooks/useProtected'
import AccountSettingsView from '@/views/AccountSettings'

const AccountSettingsPage = () => {
  useProtected()
  
  return (
    <Layout>
      <PageHeader title="Account Settings" />
      <AccountSettingsView />
    </Layout>
  )
}

export default AccountSettingsPage