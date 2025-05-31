import {
  collection, addDoc, serverTimestamp, writeBatch, getDocs, 
} from 'firebase/firestore'

import { firestore } from '@/lib/firebase/config'

const regions = [
  { englishName: 'Hokkaidō', japaneseName: '北海道' },
  { englishName: 'Tōhoku', japaneseName: '東北' },
  { englishName: 'Kantō', japaneseName: '関東' },
  { englishName: 'Chūbu', japaneseName: '中部' },
  { englishName: 'Kinki', japaneseName: '近畿' },
  { englishName: 'Chūgoku', japaneseName: '中国' },
  { englishName: 'Shikoku', japaneseName: '四国' },
  { englishName: 'Kyūshū', japaneseName: '九州' },
  { englishName: 'Okinawa', japaneseName: '沖縄' },
]

export async function uploadRegions() {
  // Get all documents in the 'regions' collection
  const ref = collection(firestore, 'regions')
  const querySnapshot = await getDocs(ref)

  // Batch delete all existing regions
  const batch = writeBatch(firestore)
  querySnapshot.forEach((docSnapshot) => {
    batch.delete(docSnapshot.ref)
  })
  await batch.commit()

  for (const region of regions) {
    const regionWithTimestamps = {
      ...region,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }
    
    await addDoc(ref, regionWithTimestamps)
  }
}
