import {
  collection, addDoc, serverTimestamp, getDocs, writeBatch, 
} from 'firebase/firestore'
import { firestore } from '@/lib/firebase/config'

const mountains = [
  {
    englishName: 'Mount Fuji',
    japaneseName: '富士山',
    description: 'mount-fuji',
    elevation: 3776,
    lat: 35.3606,
    lon: 138.7274,
    slug: 'mount-fuji',
  },
  {
    englishName: 'Mount Kita',
    japaneseName: '北岳',
    description: 'mount-kita',
    elevation: 3193,
    lat: 35.6783,
    lon: 138.6613,
    slug: 'mount-kita',
  },
  {
    englishName: 'Mount Okuhotaka',
    japaneseName: '奥穂高岳',
    description: 'mount-okuhotaka',
    elevation: 3190,
    lat: 36.2914,
    lon: 137.6489,
    slug: 'mount-okuhotaka',
  },
  {
    englishName: 'Mount Hotaka',
    japaneseName: '穂高岳',
    description: 'mount-hotaka',
    elevation: 3190,
    lat: 36.2910,
    lon: 137.6490,
    slug: 'mount-hotaka',
  },
  {
    englishName: 'Mount Tate',
    japaneseName: '立山',
    description: 'mount-tate',
    elevation: 3015,
    lat: 36.5619,
    lon: 137.9308,
    slug: 'mount-tate',
  },
  {
    englishName: 'Mount Yari',
    japaneseName: '槍ヶ岳',
    description: 'mount-yari',
    elevation: 3180,
    lat: 35.9342,
    lon: 137.7319,
    slug: 'mount-yari',
  },
  {
    englishName: 'Mount Aino',
    japaneseName: '愛鷹山',
    description: 'mount-aino',
    elevation: 2581,
    lat: 35.1756,
    lon: 138.7736,
    slug: 'mount-aino',
  },
  {
    englishName: 'Mount Norikura',
    japaneseName: '乗鞍岳',
    description: 'mount-norikura',
    elevation: 3026,
    lat: 36.2578,
    lon: 137.6361,
    slug: 'mount-norikura',
  },
  {
    englishName: 'Mount Komagatake',
    japaneseName: '駒ヶ岳',
    description: 'mount-komagatake',
    elevation: 2931,
    lat: 35.9683,
    lon: 138.6005,
    slug: 'mount-komagatake',
  },
  {
    englishName: 'Mount Kuro',
    japaneseName: '黒岳',
    description: 'mount-kuro',
    elevation: 2926,
    lat: 35.8303,
    lon: 137.7794,
    slug: 'mount-kuro',
  },
  {
    englishName: 'Mount Yatsugatake',
    japaneseName: '八ヶ岳',
    description: 'mount-yatsugatake',
    elevation: 2899,
    lat: 35.9596,
    lon: 138.3465,
    slug: 'mount-yatsugatake',
  },
  {
    englishName: 'Mount Kintoki',
    japaneseName: '金時山',
    description: 'mount-kintoki',
    elevation: 1213,
    lat: 35.3094,
    lon: 138.7553,
    slug: 'mount-kintoki',
  },
  {
    englishName: 'Mount Minami',
    japaneseName: '南岳',
    description: 'mount-minami',
    elevation: 2100,
    lat: 35.6175,
    lon: 137.7667,
    slug: 'mount-minami',
  },
  {
    englishName: 'Mount Rokko',
    japaneseName: '六甲山',
    description: 'mount-rokko',
    elevation: 931,
    lat: 34.7667,
    lon: 135.2600,
    slug: 'mount-rokko',
  },
  {
    englishName: 'Mount Hakusan',
    japaneseName: '白山',
    description: 'mount-hakusan',
    elevation: 2702,
    lat: 36.5222,
    lon: 136.5761,
    slug: 'mount-hakusan',
  },
  {
    englishName: 'Mount Asama',
    japaneseName: '浅間山',
    description: 'mount-asama',
    elevation: 2568,
    lat: 36.4433,
    lon: 138.4833,
    slug: 'mount-asama',
  },
  {
    englishName: 'Mount Iwaki',
    japaneseName: '岩木山',
    description: 'mount-iwaki',
    elevation: 1625,
    lat: 40.4850,
    lon: 140.0745,
    slug: 'mount-iwaki',
  },
  {
    englishName: 'Mount Chūbu',
    japaneseName: '中部山',
    description: 'mount-chubu',
    elevation: 2062,
    lat: 35.4692,
    lon: 137.0803,
    slug: 'mount-chubu',
  },
  {
    englishName: 'Mount Nakano',
    japaneseName: '中野岳',
    description: 'mount-nakano',
    elevation: 1459,
    lat: 35.3656,
    lon: 137.7467,
    slug: 'mount-nakano',
  },
  {
    englishName: 'Mount Kanmuri',
    japaneseName: '冠山',
    description: 'mount-kanmuri',
    elevation: 1931,
    lat: 35.5044,
    lon: 137.8019,
    slug: 'mount-kanmuri',
  },
]

export async function uploadMountains() {
  // Get all documents in the 'mountains' collection
  const ref = collection(firestore, 'mountains')
  const querySnapshot = await getDocs(ref)

  // Batch delete all existing mountains
  const batch = writeBatch(firestore)
  querySnapshot.forEach((docSnapshot) => {
    batch.delete(docSnapshot.ref)
  })
  await batch.commit()

  console.log('✅ Deleted all existing mountains.')
  
  for (const mountain of mountains) {
    const mountainWithTimestamps = {
      ...mountain,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }
    
    await addDoc(ref, mountainWithTimestamps)
    console.log(`✅ Added ${mountain.englishName}`)
  }
}
