import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ClimbingRoutes = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="mb-8 text-3xl font-black text-yellow">CLIMBING ROUTES</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-4 border-black bg-white text-black">
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-black">YOSHIDA TRAIL</h3>
                <p className="text-sm font-bold">吉田ルート • MOST POPULAR</p>
              </div>
              <Badge className="bg-yellow font-black text-black">RECOMMENDED</Badge>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-bold">DISTANCE</span>
                <div className="text-xl font-black">14.2 KM</div>
              </div>
              <div>
                <span className="text-sm font-bold">ELEVATION GAIN</span>
                <div className="text-xl font-black">1,471M</div>
              </div>
              <div>
                <span className="text-sm font-bold">DURATION</span>
                <div className="text-xl font-black">6-8 HRS</div>
              </div>
              <div>
                <span className="text-sm font-bold">DIFFICULTY</span>
                <div className="text-xl font-black text-yellow">3/5</div>
              </div>
            </div>
            <p className="mb-4 font-medium">
              The classic route with mountain huts, shops, and facilities. Best for first-time 
              climbers. Starts from Kawaguchi-ko 5th Station.
            </p>
            <Button 
              className="hover:bg-gray-800 w-full bg-black font-black text-yellow"
            >
              VIEW ROUTE DETAILS
            </Button>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow bg-black text-white">
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-black">FUJINOMIYA TRAIL</h3>
                <p className="text-sm font-bold text-yellow">富士宮ルート • SHORTEST</p>
              </div>
              <Badge className="bg-white font-black text-black">CHALLENGING</Badge>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-bold">DISTANCE</span>
                <div className="text-xl font-black text-yellow">8.5 KM</div>
              </div>
              <div>
                <span className="text-sm font-bold">ELEVATION GAIN</span>
                <div className="text-xl font-black text-yellow">1,276M</div>
              </div>
              <div>
                <span className="text-sm font-bold">DURATION</span>
                <div className="text-xl font-black text-yellow">5-7 HRS</div>
              </div>
              <div>
                <span className="text-sm font-bold">DIFFICULTY</span>
                <div className="text-xl font-black">4/5</div>
              </div>
            </div>
            <p className="mb-4 font-medium">
              Steepest and most direct route to the summit. Fewer facilities but spectacular views. 
              Starts from Fujinomiya 5th Station.
            </p>
            <Button 
              className="w-full bg-yellow font-black text-black hover:bg-white"
            >
              VIEW ROUTE DETAILS
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Card className="border-4 border-black bg-white text-black">
          <CardContent className="p-6">
            <h3 className="mb-4 text-2xl font-black">SUBASHIRI TRAIL</h3>
            <p className="mb-4 text-sm font-bold">須走ルート • FOREST APPROACH</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-black">11.5 KM</div>
                <div className="text-xs font-bold">DISTANCE</div>
              </div>
              <div>
                <div className="text-lg font-black">1,800M</div>
                <div className="text-xs font-bold">ELEVATION</div>
              </div>
              <div>
                <div className="text-lg font-black text-yellow">3/5</div>
                <div className="text-xs font-bold">DIFFICULTY</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-black bg-white text-black">
          <CardContent className="p-6">
            <h3 className="mb-4 text-2xl font-black">GOTEMBA TRAIL</h3>
            <p className="mb-4 text-sm font-bold">御殿場ルート • LONGEST</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-black">19.5 KM</div>
                <div className="text-xs font-bold">DISTANCE</div>
              </div>
              <div>
                <div className="text-lg font-black">2,336M</div>
                <div className="text-xs font-bold">ELEVATION</div>
              </div>
              <div>
                <div className="text-lg font-black text-yellow">4/5</div>
                <div className="text-xs font-bold">DIFFICULTY</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ClimbingRoutes 