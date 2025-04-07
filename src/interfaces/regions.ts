import type { Timestamp } from 'firebase/firestore'

export type TRegion = {
  id: string
  englishName: string
  japaneseName: string
  createdAt: Timestamp
  updatedAt: Timestamp
}