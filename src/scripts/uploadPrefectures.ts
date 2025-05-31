import {
  collection,
  doc,
  getDocs,
  writeBatch,
} from 'firebase/firestore'

import { firestore } from '@/lib/firebase/config'

const prefectures = [
  { englishName: 'Hokkaidō', japaneseName: '北海道' },
  { englishName: 'Aomori', japaneseName: '青森県' },
  { englishName: 'Iwate', japaneseName: '岩手県' },
  { englishName: 'Miyagi', japaneseName: '宮城県' },
  { englishName: 'Akita', japaneseName: '秋田県' },
  { englishName: 'Yamagata', japaneseName: '山形県' },
  { englishName: 'Fukushima', japaneseName: '福島県' },
  { englishName: 'Ibaraki', japaneseName: '茨城県' },
  { englishName: 'Tochigi', japaneseName: '栃木県' },
  { englishName: 'Gunma', japaneseName: '群馬県' },
  { englishName: 'Saitama', japaneseName: '埼玉県' },
  { englishName: 'Chiba', japaneseName: '千葉県' },
  { englishName: 'Tokyo', japaneseName: '東京都' },
  { englishName: 'Kanagawa', japaneseName: '神奈川県' },
  { englishName: 'Niigata', japaneseName: '新潟県' },
  { englishName: 'Toyama', japaneseName: '富山県' },
  { englishName: 'Ishikawa', japaneseName: '石川県' },
  { englishName: 'Fukui', japaneseName: '福井県' },
  { englishName: 'Yamanashi', japaneseName: '山梨県' },
  { englishName: 'Nagano', japaneseName: '長野県' },
  { englishName: 'Gifu', japaneseName: '岐阜県' },
  { englishName: 'Shizuoka', japaneseName: '静岡県' },
  { englishName: 'Aichi', japaneseName: '愛知県' },
  { englishName: 'Mie', japaneseName: '三重県' },
  { englishName: 'Shiga', japaneseName: '滋賀県' },
  { englishName: 'Kyoto', japaneseName: '京都府' },
  { englishName: 'Osaka', japaneseName: '大阪府' },
  { englishName: 'Hyōgo', japaneseName: '兵庫県' },
  { englishName: 'Nara', japaneseName: '奈良県' },
  { englishName: 'Wakayama', japaneseName: '和歌山県' },
  { englishName: 'Tottori', japaneseName: '鳥取県' },
  { englishName: 'Shimane', japaneseName: '島根県' },
  { englishName: 'Okayama', japaneseName: '岡山県' },
  { englishName: 'Hiroshima', japaneseName: '広島県' },
  { englishName: 'Yamaguchi', japaneseName: '山口県' },
  { englishName: 'Tokushima', japaneseName: '徳島県' },
  { englishName: 'Kagawa', japaneseName: '香川県' },
  { englishName: 'Ehime', japaneseName: '愛媛県' },
  { englishName: 'Kōchi', japaneseName: '高知県' },
  { englishName: 'Fukuoka', japaneseName: '福岡県' },
  { englishName: 'Saga', japaneseName: '佐賀県' },
  { englishName: 'Nagasaki', japaneseName: '長崎県' },
  { englishName: 'Kumamoto', japaneseName: '熊本県' },
  { englishName: 'Ōita', japaneseName: '大分県' },
  { englishName: 'Miyazaki', japaneseName: '宮崎県' },
  { englishName: 'Kagoshima', japaneseName: '鹿児島県' },
  { englishName: 'Okinawa', japaneseName: '沖縄県' },
]

export async function uploadPrefectures() {
  // Get all documents in the 'prefectures' collection
  const ref = collection(firestore, 'prefectures')
  const querySnapshot = await getDocs(ref)

  // Batch delete all existing prefectures
  const batch = writeBatch(firestore)
  querySnapshot.forEach((docSnapshot) => {
    batch.delete(docSnapshot.ref)
  })
  await batch.commit()

  // Add new prefectures with 'createdAt' and 'updatedAt' fields
  const addBatch = writeBatch(firestore)
  for (const p of prefectures) {
    const prefectureRef = doc(collection(firestore, 'prefectures'))
    addBatch.set(prefectureRef, {
      ...p,
      createdAt: new Date(), // Using current time for createdAt
      updatedAt: new Date(),  // Using current time for updatedAt
    })
  }

  // Commit the batch
  await addBatch.commit()
}
