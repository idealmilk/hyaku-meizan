import Image from 'next/image'

import { Button } from '@/components/ui/button'

const Gallery = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="mb-8 text-3xl font-black text-yellow">SUMMIT GALLERY</h2>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
        {
          Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group relative aspect-square">
              <Image
                src={'/placeholder.svg?height=200&width=200'}
                alt={`Fuji summit photo ${i + 1}`}
                width={200}
                height={200}
                className={
                  `
                  size-full border-4 border-white object-cover transition-all 
                  group-hover:border-yellow
                `
                }
              />
              <div 
                className={
                  `
                  absolute inset-0 flex items-center justify-center bg-black/0
                  transition-all group-hover:bg-black/70
                `
                }
              >
                <div className="text-center opacity-0 transition-all group-hover:opacity-100">
                  <div className="text-sm font-black text-yellow">@CLIMBER_{i + 1}</div>
                  <div className="text-xs font-bold text-white">NOV 2024</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-8 text-center">
        <Button 
          className="bg-yellow px-8 py-3 text-lg font-black text-black hover:bg-white"
        >
          VIEW ALL 1,247 PHOTOS
        </Button>
      </div>
    </section>
  )
}

export default Gallery 