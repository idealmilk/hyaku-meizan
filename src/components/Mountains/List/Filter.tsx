import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import useSWR from 'swr'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Select, SelectContent, SelectGroup, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import type { TPrefecture } from '@/interfaces/prefectures'
import type { TRegion } from '@/interfaces/regions'
import { getPrefectures } from '@/lib/firebase/firestore/prefectures'
import { getRegions } from '@/lib/firebase/firestore/regions'

const prefecturesFetcher = async () => {
  const data = await getPrefectures()
  return data
}

const regionsFetcher = async () => {
  const data = await getRegions()
  return data
}

type Props = {
elevationRange: [number, number]
  selectedPrefectures: string[]
  setElevationRange: Dispatch<SetStateAction<[number, number]>>
  setSelectedPrefectures: Dispatch<SetStateAction<string[]>>
  onApply: () => void
}

const MountainsFilter = ({
  elevationRange,
  selectedPrefectures,
  setElevationRange,
  setSelectedPrefectures,
  onApply,
}: Props) => {
  const { data: prefectures } = useSWR('prefectures', prefecturesFetcher)
  const { data: regions } = useSWR('regions', regionsFetcher)
  const [ selectedRegions, setSelectedRegions ] = useState<string[]>([])

  const togglePrefecture = (id: string) => {
    setSelectedPrefectures((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [ ...prev, id ],
    )
  }

  const toggleRegion = (id: string) => {
    setSelectedRegions((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [ ...prev, id ],
    )
  }
  
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

      <Select>
        <SelectTrigger className="w-44">
          <SelectValue placeholder="Non selected" />
        </SelectTrigger>
        <SelectContent className='h-60'>
          <SelectGroup>
            {regions?.map((region: TRegion) => (
              <div key={region.id} className="flex items-center space-x-2">
                <Checkbox
                  id={region.englishName} 
                  checked={selectedRegions.includes(region.id)}
                  onCheckedChange={() => {
                    toggleRegion(region.id)
                  }}
                />
                <label
                  htmlFor={region.englishName}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {region.englishName}
                </label>
              </div>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>


      <Select>
        <SelectTrigger className="w-44">
          <SelectValue placeholder="Non selected" />
        </SelectTrigger>
        <SelectContent className='h-60'>
          <SelectGroup>
            {prefectures?.map((prefecture: TPrefecture) => (
              <div key={prefecture.id} className="flex items-center space-x-2">
                <Checkbox
                  id={prefecture.englishName} 
                  checked={selectedPrefectures.includes(prefecture.id)}
                  onCheckedChange={() => {
                    togglePrefecture(prefecture.id)
                  }}
                  disabled={
                    selectedRegions.length > 0 && !selectedRegions.includes(prefecture.region.id)
                  }
                />
                <label
                  htmlFor={prefecture.englishName}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {prefecture.englishName}
                </label>
              </div>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <button 
        onClick={onApply} 
        className="bg-black px-6 py-1 text-white"
      >
        Apply
      </button>
    </div>
  )
}

export default MountainsFilter