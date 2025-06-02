import { TMountain } from '@/interfaces/mountains'

type Props = {
  englishName: TMountain['englishName']
  elevation: TMountain['elevation']
}

const MountainTitle = ({ englishName, elevation }: Props) => {
  return (
    <section className="w-full px-20 text-white">
      <h1 className="text-8xl font-semibold leading-[5rem]">
        {englishName}
      </h1>
      <p className="text-6xl text-gray">{elevation}m</p>
    </section>
  )
}

export default MountainTitle
