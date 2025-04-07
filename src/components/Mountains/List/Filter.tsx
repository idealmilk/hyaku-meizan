import type { Dispatch, SetStateAction } from 'react'
import type { TMountain } from '@/interfaces/mountains'
import type { KeyedMutator } from 'swr'

type Props = {
  mutate: KeyedMutator<TMountain[]>
  minElevation?: number
  setMinElevation: Dispatch<SetStateAction<number | undefined>>
}

const MountainsFilter = ({ mutate, minElevation, setMinElevation }: Props) => {
  return (
    <aside className="absolute left-0 top-0 p-4">
      <label className="mb-2 block">
          Min Elevation:
        <input
          type="number"
          value={minElevation ?? ''}
          onChange={(e) => setMinElevation(Number(e.target.value) || undefined)}
          className="ml-2 border p-1"
        />
      </label>

      <button onClick={() => mutate()} className="mt-2 rounded bg-blue-500 px-4 py-2 text-white">
          Apply Filters
      </button>
    </aside>
  )
}

export default MountainsFilter