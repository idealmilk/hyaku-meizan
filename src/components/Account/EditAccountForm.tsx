
import useProtected from '@/hooks/useProtected'
import { useUser } from '@/context/User'

const EditAccountForm = () => {
  useProtected()
  
  const { user } = useUser()

  return (
    <div>
      <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
    </div>
  )
}

export default EditAccountForm