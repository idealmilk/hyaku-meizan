import { Mountain, TrendingUp, Users, Award } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface StatsProps {
  elevation: number
}

const Stats = ({ elevation }: StatsProps) => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-4 border-black bg-yellow text-black">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <Mountain className="size-8" />
              <span className="text-lg font-black">ELEVATION</span>
            </div>
            <div className="mb-2 text-4xl font-black">{elevation}M</div>
            <div className="text-sm font-bold">HIGHEST IN JAPAN</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-black bg-white text-black">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <TrendingUp className="size-8" />
              <span className="text-lg font-black">DIFFICULTY</span>
            </div>
            <div className="mb-2 text-4xl font-black text-yellow">3/5</div>
            <div className="text-sm font-bold">MODERATE</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow bg-black text-white">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <Users className="size-8 text-yellow" />
              <span className="text-lg font-black">ASCENTS</span>
            </div>
            <div className="mb-2 text-4xl font-black text-yellow">2,847</div>
            <div className="text-sm font-bold">THIS SEASON</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-black bg-white text-black">
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <Award className="size-8" />
              <span className="text-lg font-black">RANK</span>
            </div>
            <div className="mb-2 text-4xl font-black text-yellow">#001</div>
            <div className="text-sm font-bold">OF 100 PEAKS</div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Stats 