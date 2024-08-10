import Mountains from '@/data/mountains.json'

const MountainsGrid = () => {
  return (
    <section className="h-screen">
      {Mountains.map((mountain, idx) => {
        return (
          <h1 key={mountain.rank}>{mountain.englishName}</h1>
        )
      })}
    </section>
  );
}

export default MountainsGrid
