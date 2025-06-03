import { Route, Clock, Camera, Star, AlertTriangle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const RecentActivity = () => {
  return (
    <section className="bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-black">RECENT ASCENTS</h2>
        <div className="space-y-6">
          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div 
                  className="flex size-12 items-center justify-center bg-black text-lg font-black text-yellow"
                >
                  KT
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-lg font-black">KENJI TANAKA</span>
                    <Badge className="bg-yellow font-black text-black">COMPLETED</Badge>
                    <span className="text-sm font-bold">2 HOURS AGO</span>
                  </div>
                  <p className="mb-3 font-medium">
                    27th summit via Yoshida Trail. Pre-season conditions were brutal but 
                    manageable with proper gear. Sunrise from the crater rim never gets old. 
                    Perfect visibility today.
                  </p>
                  <div className="flex items-center gap-6 text-sm font-bold">
                    <div className="flex items-center gap-1">
                      <Route className="size-4" />
                      YOSHIDA TRAIL
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-4" />
                      6H 23M
                    </div>
                    <div className="flex items-center gap-1">
                      <Camera className="size-4" />
                      24 PHOTOS
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="size-4" />
                      47 LIKES
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div 
                  className="flex size-12 items-center justify-center bg-yellow text-lg font-black text-black"
                >
                  YS
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-lg font-black">YUKI SATO</span>
                    <Badge className="bg-yellow font-black text-black">COMPLETED</Badge>
                    <span className="text-sm font-bold">5 HOURS AGO</span>
                  </div>
                  <p className="mb-3 font-medium">
                    First time up Fuji-san! Fujinomiya route was tough but incredible. The 
                    steepness is no joke but the views from the summit crater made every step 
                    worth it. Already planning my next ascent.
                  </p>
                  <div className="flex items-center gap-6 text-sm font-bold">
                    <div className="flex items-center gap-1">
                      <Route className="size-4" />
                      FUJINOMIYA TRAIL
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-4" />
                      7H 12M
                    </div>
                    <div className="flex items-center gap-1">
                      <Camera className="size-4" />
                      18 PHOTOS
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="size-4" />
                      32 LIKES
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div 
                  className="flex size-12 items-center justify-center bg-black text-lg font-black text-yellow"
                >
                  MH
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-lg font-black">MIKE HARRISON</span>
                    <Badge className="bg-black font-black text-yellow">ATTEMPTED</Badge>
                    <span className="text-sm font-bold">1 DAY AGO</span>
                  </div>
                  <p className="mb-3 font-medium">
                    Had to turn back at 8th station due to weather. Visibility dropped to zero 
                    and winds picked up significantly. Safety first - Fuji will be here next 
                    time. Respect the mountain.
                  </p>
                  <div className="flex items-center gap-6 text-sm font-bold">
                    <div className="flex items-center gap-1">
                      <Route className="size-4" />
                      YOSHIDA TRAIL
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-4" />
                      4H 45M
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="size-4" />
                      WEATHER ABORT
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="size-4" />
                      28 LIKES
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button 
            className="hover:bg-gray-800 bg-black px-8 py-3 text-lg font-black text-yellow"
          >
            VIEW ALL ACTIVITY
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RecentActivity 