import { useUser } from '@/context/User'

const EditAccountForm = () => {
  const { user } = useUser()

  console.log('User: ', user)

  return (
    <div>Edit Account Form</div>
  )
}

export default EditAccountForm