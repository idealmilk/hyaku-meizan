import { Mountain, TrendingUp, Calendar, Award } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const ProfileStats = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="mb-8 text-3xl font-black text-yellow">ACHIEVEMENT DATA</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-4 border-black bg-white text-black">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <Mountain className="size-8" />
              <span className="text-lg font-black">PEAKS</span>
            </div>
            <div className="mb-2 text-4xl font-black text-yellow">73</div>
            <div className="text-sm font-bold">OF 100 CONQUERED</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow bg-black text-white">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <TrendingUp className="size-8 text-yellow" />
              <span className="text-lg font-black">ELEVATION</span>
            </div>
            <div className="mb-2 text-4xl font-black text-yellow">142K</div>
            <div className="text-sm font-bold">METERS CLIMBED</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-black bg-white text-black">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <Calendar className="size-8" />
              <span className="text-lg font-black">DAYS</span>
            </div>
            <div className="mb-2 text-4xl font-black text-yellow">189</div>
            <div className="text-sm font-bold">IN THE MOUNTAINS</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow bg-black text-white">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <Award className="size-8 text-yellow" />
              <span className="text-lg font-black">RANK</span>
            </div>
            <div className="mb-2 text-4xl font-black text-yellow">#247</div>
            <div className="text-sm font-bold">GLOBAL POSITION</div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ProfileStats