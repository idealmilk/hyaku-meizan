import Mountains from '@/data/mountains.json'

const MountainsGrid = () => {
  return (
    <section className="h-screen w-screen bg-black text-white">
      {Mountains.map((mountain) => {
        return <h1 key={mountain.rank}>{mountain.englishName}</h1>
      })}
    </section>
  )
}

export default MountainsGrid
