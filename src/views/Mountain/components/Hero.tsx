import Image from 'next/image'

import type { TMountain } from '@/interfaces/mountains'

type Props = {
  image: TMountain['image']
  englishName: TMountain['englishName']
}

const MountainHero = ({ image, englishName }: Props) => {
  const tempImageUrl = image.replace(/^\/static/, '')

  return (
    <div className="relative h-[60vh] w-screen">
      <Image
        src={tempImageUrl}
        alt={englishName}
        fill
        className="object-cover"
      />
    </div>
  )
}

export default MountainHero
