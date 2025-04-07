import useSWR from 'swr'

import { getPrefectures } from '@/lib/firebase/firestore/prefectures'

const fetcher = async () => {
  const data = await getPrefectures()
  return data
}

const PrefecturesList = () => {
  const { data: prefectures, error } = useSWR('prefectures', fetcher)

  console.log('prefectures: ', prefectures)

  if (error) return <p>Error loading prefectures</p>

  if (!prefectures) return <p>Loading...</p>

  return (
    <section className="relative flex w-full justify-between pl-40 pr-10 pt-20">
      {prefectures.map((prefecture)=>(
        <p key={prefecture.id}>{prefecture.englishName}</p>
      ))}
    </section>
  )
}

export default PrefecturesList
