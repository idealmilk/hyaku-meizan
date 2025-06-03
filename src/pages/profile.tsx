import Layout from '@/components/Layout'
import useProtected from '@/hooks/useProtected'
import ProfileView from '@/views/Profile'

const ProfilePage = () => {
  useProtected()

  return(
    <Layout>
      <ProfileView />
    </Layout>
  )
}

export default ProfilePage