import {
  collection, getDocs, orderBy, query, where, 
} from 'firebase/firestore'

import type { TMountain, TMountainFilter } from '@/interfaces/mountains'
import { firestore } from '@/lib/firebase/config'

const mountainsRef = collection(firestore, 'mountains')

export const getMountains = async ({
  minElevation,
  maxElevation,
  prefectureRef,
}: TMountainFilter = {}): Promise<TMountain[]> => {
  let q = query(mountainsRef)

  const filters = []

  if (minElevation !== undefined) {
    filters.push(where('elevation', '>=', minElevation))
  }

  if (maxElevation !== undefined) {
    filters.push(where('elevation', '<=', maxElevation))
  }

  if (prefectureRef) {
    filters.push(where('prefectures', 'array-contains', prefectureRef))
  }

  if (filters.length > 0) {
    q = query(mountainsRef, ...filters, orderBy('elevation', 'desc'))
  }
  else {
    q = query(mountainsRef, orderBy('elevation', 'desc'))
  }

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