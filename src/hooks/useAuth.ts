import { useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'

import type { User } from 'firebase/auth'

import { auth } from '@/lib/firebase/config'



export const useAuth = () => {
  const [ user, setUser ] = useState<User | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, isLoading }
}
