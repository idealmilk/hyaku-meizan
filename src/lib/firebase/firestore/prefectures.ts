import {
  collection, getDocs, orderBy, query, where, 
} from 'firebase/firestore'

import type { TPrefecture } from '@/interfaces/prefectures'

import { firestore } from '@/lib/firebase/config'

const prefecturesRef = collection(firestore, 'prefectures')

export const getPrefectures = async (): Promise<TPrefecture[]> => {
  const q = query(prefecturesRef, orderBy('englishName', 'asc'))

  const snapshot = await getDocs(q)

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as TPrefecture[]

  return data
}

export const getPrefectureBySlug = async (slug: string): Promise<TPrefecture | null> => {
  const q = query(prefecturesRef, where('slug', '==', slug))

  const snapshot = await getDocs(q)

  if (snapshot.empty) {
    return null
  }

  const prefecture = snapshot.docs[0].data() as TPrefecture
  
  return prefecture
}