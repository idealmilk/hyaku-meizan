import { useEffect, useState } from 'react'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

import type { User } from 'firebase/auth'

export const useAuth = () => {
  const [ user, setUser ] = useState<User | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [ auth ])

  return { user, isLoading }
}
