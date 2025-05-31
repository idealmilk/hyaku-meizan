import {
  collection, getDocs, orderBy, query, where, limit as limitFn,
} from 'firebase/firestore'

import type { TMountain } from '@/interfaces/mountains'

import { firestore } from '@/lib/firebase/config'

const mountainsRef = collection(firestore, 'mountains')

export const getMountains = async (limit?: number): Promise<TMountain[]> => {
  const q = limit
    ? query(mountainsRef, orderBy('elevation', 'desc'), limitFn(limit))
    : query(mountainsRef, orderBy('elevation', 'desc'))

  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => doc.data() as TMountain)

  return data
}

export const getMountainBySlug = async (slug: string): Promise<TMountain | null> => {
  const q = query(mountainsRef, where('slug', '==', slug))

  const snapshot = await getDocs(q)

  if (snapshot.empty) {
    return null
  }

  const mountain = snapshot.docs[0].data() as TMountain
  
  return mountain
}