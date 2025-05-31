import type { DocumentReference, Timestamp } from 'firebase/firestore'

export type TPrefecture = {
  id: string
  englishName: string
  japaneseName: string
  region: DocumentReference
  createdAt: Timestamp
  updatedAt: Timestamp
}