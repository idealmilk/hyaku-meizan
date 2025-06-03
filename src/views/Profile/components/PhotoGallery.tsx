import Image from 'next/image'

import { Button } from '@/components/ui/button'

const ProfilePhotoGallery = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="mb-8 text-3xl font-black text-yellow">SUMMIT GALLERY</h2>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="group relative aspect-square">
              <Image
                src={'/placeholder.svg?height=300&width=300'}
                alt={`Summit photo ${i + 1}`}
                width={300}
                height={300}
                className="size-full border-4 border-white object-cover transition-all group-hover:border-yellow"
              />
              <div className={
                `
                absolute inset-0 flex items-center justify-center bg-black/0
                transition-all group-hover:bg-black/50
              `
              }
              >
                <span className="text-lg font-black text-white opacity-0 transition-all group-hover:opacity-100">
                  PEAK #{i + 1}
                </span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-8 text-center">
        <Button className="bg-yellow px-8 py-3 text-lg font-black text-black hover:bg-white">
        VIEW ALL 247 PHOTOS
        </Button>
      </div>
    </section>
  )
}

export default ProfilePhotoGallery