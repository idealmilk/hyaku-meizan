
import { useUser } from '@/context/User'
import useProtected from '@/hooks/useProtected'

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