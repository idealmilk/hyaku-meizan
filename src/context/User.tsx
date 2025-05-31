import {
  createContext, useContext, useEffect, useState, 
} from 'react'

import { onAuthStateChanged  } from 'firebase/auth'

import type { TUser } from '@/interfaces/users'
import type { User as FirebaseUser  } from 'firebase/auth'
import type { ReactNode } from 'react'

import { auth } from '@/lib/firebase/config'
import { getUserByFirebaseId } from '@/lib/firebase/firestore/users'

interface UserContextType {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [ user, setUser ] = useState<TUser | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const fetchedUser = await getUserByFirebaseId(firebaseUser.uid)
        setUser(fetchedUser)
      }
      else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
