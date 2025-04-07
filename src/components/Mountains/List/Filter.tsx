import type { Dispatch, SetStateAction } from 'react'
import { Slider } from '@/components/ui/slider'
import type { TMountain } from '@/interfaces/mountains'
import type { KeyedMutator } from 'swr'

type Props = {
  mutate: KeyedMutator<TMountain[]>
  elevationRange: [number, number]
  setElevationRange: Dispatch<SetStateAction<[number, number]>>
}

const MountainsFilter = ({ mutate, elevationRange, setElevationRange }: Props) => {
  return (
    <div className="flex justify-between">
      <label className="mb-4 block w-48">
        Elevation
        <Slider
          value={elevationRange}
          onValueChange={(val: [number, number]) => setElevationRange(val)}
          min={0}
          max={4000}
          step={1}
          className="mt-4"
        />
      </label>


      <button onClick={() => mutate()} className="bg-black px-6 py-1 text-white">
        Apply
      </button>
    </div>
  )
}

export default MountainsFilter