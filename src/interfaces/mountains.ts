import type { DocumentReference, Timestamp } from 'firebase/firestore'

export type TMountain = {
  id: string
  englishName: string
  japaneseName: string
  prefectures: DocumentReference[]
  lon: number
  lat: number
  elevation: number
  description: string
  image: string
  slug: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export type TMountainFilter = {
  minElevation?: number
  maxElevation?: number
  prefectureRefs?: DocumentReference[] | string[]
}