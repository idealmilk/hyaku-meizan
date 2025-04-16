import type { TMountain } from '@/interfaces/mountains'

type MountainViewProps = {
  mountain: TMountain
}

const MountainView = ({ mountain }: MountainViewProps) => {
  return (
    <div>
      <h1>{mountain?.englishName}</h1>
    </div>
  )
}

export default MountainView
