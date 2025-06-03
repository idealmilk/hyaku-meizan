import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const PlanningTools = () => {
  return (
    <section className="bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-3xl font-black">PLANNING TOOLS</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-black">GEAR CHECKLIST</h3>
              <div className="space-y-2 text-sm font-bold">
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-yellow" />
                  <span>HEADLAMP + EXTRA BATTERIES</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-yellow" />
                  <span>WARM LAYERS (FLEECE/DOWN)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-yellow" />
                  <span>RAIN GEAR (JACKET + PANTS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-yellow" />
                  <span>HIKING BOOTS + GAITERS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 bg-yellow" />
                  <span>WATER (3L MINIMUM)</span>
                </div>
              </div>
              <Button 
                className="mt-4 w-full bg-black font-black text-yellow"
              >
                FULL CHECKLIST
              </Button>
            </CardContent>
          </Card>

          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-black">TRANSPORTATION</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-black">KAWAGUCHI-KO 5TH STATION</div>
                  <div className="text-sm font-bold">Bus from Kawaguchi-ko Station</div>
                  <div className="text-sm font-bold text-yellow">¥1,570 • 50 MIN</div>
                </div>
                <div>
                  <div className="font-black">FUJINOMIYA 5TH STATION</div>
                  <div className="text-sm font-bold">Bus from Kofu Station</div>
                  <div className="text-sm font-bold text-yellow">¥2,240 • 75 MIN</div>
                </div>
              </div>
              <Button 
                className="mt-4 w-full bg-black font-black text-yellow"
              >
                ROUTE PLANNER
              </Button>
            </CardContent>
          </Card>

          <Card className="border-4 border-black">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-black">MOUNTAIN HUTS</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-black">TAISHIKAN (8TH STATION)</div>
                  <div className="text-sm font-bold">Yoshida Trail</div>
                  <div className="text-sm font-bold text-yellow">¥6,000/NIGHT</div>
                </div>
                <div>
                  <div className="font-black">GANKO-KAN (7TH STATION)</div>
                  <div className="text-sm font-bold">Fujinomiya Trail</div>
                  <div className="text-sm font-bold text-yellow">¥5,500/NIGHT</div>
                </div>
              </div>
              <Button 
                className="mt-4 w-full bg-black font-black text-yellow"
              >
                BOOK ACCOMMODATION
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PlanningTools 