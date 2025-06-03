import { Thermometer, AlertTriangle, Eye } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const CurrentConditions = () => {
  return (
    <section className="bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-black">CURRENT CONDITIONS</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Thermometer className="size-8" />
                <span className="text-xl font-black">WEATHER</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-bold">SUMMIT TEMP</span>
                  <span className="font-black text-yellow">-12°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">BASE TEMP</span>
                  <span className="font-black">4°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">WIND SPEED</span>
                  <span className="font-black">25 KM/H</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">VISIBILITY</span>
                  <span className="font-black text-yellow">EXCELLENT</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <AlertTriangle className="size-8" />
                <span className="text-xl font-black">ALERTS</span>
              </div>
              <div className="space-y-3">
                <Badge 
                  className="w-full justify-center bg-yellow py-2 font-black text-black"
                >
                  CLIMBING SEASON CLOSED
                </Badge>
                <Badge 
                  className="w-full justify-center bg-black py-2 font-black text-yellow"
                >
                  SNOW CONDITIONS
                </Badge>
                <p className="text-sm font-bold">
                  Official climbing season: July 1 - September 10. Winter ascents require 
                  advanced mountaineering skills.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Eye className="size-8" />
                <span className="text-xl font-black">WEBCAM</span>
              </div>
              <div 
                className="mb-3 flex aspect-video items-center justify-center bg-black"
              >
                <span className="font-black text-yellow">LIVE FEED</span>
              </div>
              <p className="text-sm font-bold">Updated every 10 minutes</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CurrentConditions 