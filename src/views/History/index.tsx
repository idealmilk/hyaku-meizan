import PageHeader from '@/components/PageHeader'

const HistoryView = () => {
  return(
    <>
      <PageHeader title="History" />
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="mb-4 text-2xl font-semibold">What is the Hyaku Meizan?</h2>
        <p className="mb-4 text-lg">
          The <strong>Hyaku Meizan</strong> (百名山), or "100 Famous Mountains of Japan," is a
          celebrated list of mountains compiled by mountaineer and author{' '}
          <strong>Kyūya Fukada</strong> in his 1964 book{' '}
          <em>“Nihon Hyaku Meizan”</em>. These mountains were selected based not just
          on height, but also on beauty, historical significance, and uniqueness.
        </p>
        <p className="text-lg">
          The list has become a cultural touchstone in Japan, inspiring hikers and
          climbers to visit all 100 peaks. It has influenced Japanese mountaineering
          deeply and continues to shape outdoor adventure culture today.
        </p>
      </section>


      <section className="bg-white py-10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-2xl font-semibold">Timeline of the Hyaku Meizan</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-bold">
    1964 – Original Publication
              </h3>
              <p>
    Kyūya Fukada publishes <em>Nihon Hyaku Meizan</em>, documenting his personal
    list of Japan’s most notable mountains.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold">
                1980s – Popularization
              </h3>
              <p>
                The list gains mainstream recognition as hiking culture spreads in postwar Japan.
              </p>
            </div>

            <div className="border-yellow-600 border-l-4 pl-4">
              <h3 className="text-lg font-bold">
                990s–2000s – Media Coverage
              </h3>
              <p>
                Television programs and guidebooks begin to feature the 100 mountains,
                encouraging nationwide hiking quests.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="text-lg font-bold">
                Today
              </h3>
              <p>
                The Hyaku Meizan is considered a national hiking goal. Completing all 100
                is a badge of honor among mountaineers.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-2xl font-semibold">Notable Mountains in the List</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded bg-white p-4 shadow">
              <h3 className="text-lg font-bold">Mount Fuji (富士山)</h3>
              <p className="text-gray-600 text-sm">Japan’s highest peak and a sacred icon, standing at 3,776 meters.</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <h3 className="text-lg font-bold">Mount Kita (北岳)</h3>
              <p className="text-gray-600 text-sm">The second highest mountain in Japan, known for alpine flowers and ridgelines.</p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <h3 className="text-lg font-bold">Mount Yari (槍ヶ岳)</h3>
              <p className="text-gray-600 text-sm">Often called the “Matterhorn of Japan” due to its sharp, spear-like peak.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HistoryView