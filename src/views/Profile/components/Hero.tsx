const ProfileHero = () => {
  return (
    <section className="border-b-4 border-yellow bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-6">
              <div className="flex size-24 items-center justify-center bg-black text-3xl font-black text-yellow">
                  KT
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-4xl font-black tracking-tight">KENJI TANAKA</h2>
                <p className="mb-4 text-xl font-bold">田中 健二 • MOUNTAIN OBSESSIVE</p>
                <p className="text-lg font-medium leading-relaxed">
                    Five years deep into the 百名山 challenge.
                    Every summit is a data point, every ascent a story.
                    Currently at 73/100 peaks conquered.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black p-6 text-white">
            <h3 className="mb-4 text-xl font-black text-yellow">QUICK STATS</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-bold">PEAKS</span>
                <span className="font-black text-yellow">73/100</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">ELEVATION</span>
                <span className="font-black text-yellow">142,350M</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">DAYS</span>
                <span className="font-black text-yellow">189</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">RANK</span>
                <span className="font-black text-yellow">#247</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHero