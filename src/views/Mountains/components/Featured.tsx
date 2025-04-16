import type { TMountain } from '@/interfaces/mountains'

type FeaturedProps = {
  featuredMountain?: TMountain
}

const Featured = ({ featuredMountain }: FeaturedProps) => {
  return (
    <section className="sticky top-0 h-full w-2/5 p-10">
      {featuredMountain && (
        <div>
          <h1>{featuredMountain.englishName}</h1>
          <p>{featuredMountain.japaneseName}</p>
          {/* <p>Prefecture: {featuredMountain.prefectures.map((prefecture) => prefecture)}</p> */}
        </div>
      )}
    </section>
  )
}

export default Featured
