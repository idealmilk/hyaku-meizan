import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import type { TUserRequest } from '@/interfaces/users'
import { firestore } from '@/lib/firebase/config'

const usersRef = collection(firestore, 'users')

export const createUser = async (userRequest: TUserRequest): Promise<void> => {
  await addDoc(usersRef, {
    ...userRequest,
    createdAt: serverTimestamp(),
  })
}
