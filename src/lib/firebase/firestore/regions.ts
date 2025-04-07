import {
  collection, getDocs, orderBy, query, where, 
} from 'firebase/firestore'

import type { TRegion } from '@/interfaces/regions'
import { firestore } from '@/lib/firebase/config'

const regionsRef = collection(firestore, 'regions')

export const getRegions = async (): Promise<TRegion[]> => {
  const q = query(regionsRef, orderBy('englishName', 'asc'))

  const snapshot = await getDocs(q)

  const data = snapshot.docs.map((doc) => doc.data() as TRegion)

  return data
}

export const getRegionBySlug = async (slug: string): Promise<TRegion | null> => {
  const q = query(regionsRef, where('slug', '==', slug))

  const snapshot = await getDocs(q)

  if (snapshot.empty) {
    return null
  }

  const region = snapshot.docs[0].data() as TRegion
  
  return region
}