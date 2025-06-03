import { Route, Clock, Camera, Star, AlertTriangle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const RecentAdventures = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="mb-8 text-3xl font-black text-yellow">RECENT ADVENTURES</h2>
      <div className="space-y-6">
        <Card className="border-4 border-yellow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center bg-yellow text-lg font-black text-black">
                MT
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-lg font-black text-yellow">MOUNT TSURUGI</span>
                  <Badge className="bg-yellow font-black text-black">COMPLETED</Badge>
                  <span className="text-sm font-bold text-white">2 DAYS AGO</span>
                </div>
                <p className="mb-3 font-medium text-white">
                  Perfect conditions for a winter ascent. Deep powder above treeline made for 
                  slow going, but the summit views were incredible. Met some great climbers at 
                  the emergency hut.
                </p>
                <div className="flex items-center gap-6 text-sm font-bold text-white">
                  <div className="flex items-center gap-1">
                    <Route className="size-4" />
                    TSURUGI RIDGE
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    8H 45M
                  </div>
                  <div className="flex items-center gap-1">
                    <Camera className="size-4" />
                    32 PHOTOS
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4" />
                    64 LIKES
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center bg-yellow text-lg font-black text-black">
                MH
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-lg font-black text-yellow">MOUNT HOTAKA</span>
                  <Badge className="bg-yellow font-black text-black">COMPLETED</Badge>
                  <span className="text-sm font-bold text-white">1 WEEK AGO</span>
                </div>
                <p className="mb-3 font-medium text-white">
                  Challenging traverse of the Hotaka range. Weather held up beautifully and the 
                  autumn colors were at their peak. Technical sections required full attention 
                  but felt solid throughout.
                </p>
                <div className="flex items-center gap-6 text-sm font-bold text-white">
                  <div className="flex items-center gap-1">
                    <Route className="size-4" />
                    KARASAWA CIRQUE
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    10H 15M
                  </div>
                  <div className="flex items-center gap-1">
                    <Camera className="size-4" />
                    45 PHOTOS
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4" />
                    89 LIKES
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 items-center justify-center bg-yellow text-lg font-black text-black">
                MY
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-lg font-black text-yellow">MOUNT YARI</span>
                  <Badge className="bg-black font-black text-yellow">ATTEMPTED</Badge>
                  <span className="text-sm font-bold text-white">2 WEEKS AGO</span>
                </div>
                <p className="mb-3 font-medium text-white">
                  Turned back 200m from summit due to incoming storm. Lightning risk was too high 
                  to continue. Good decision in retrospect - storm hit hard just as we reached 
                  the hut.
                </p>
                <div className="flex items-center gap-6 text-sm font-bold text-white">
                  <div className="flex items-center gap-1">
                    <Route className="size-4" />
                    YARISAWA
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    6H 30M
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="size-4" />
                    WEATHER ABORT
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4" />
                    42 LIKES
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default RecentAdventures