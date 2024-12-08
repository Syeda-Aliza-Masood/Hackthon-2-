'use client'

import Image from 'next/image'

const slide = {
  id: 1,
  title: 'Inner Peace',
  category: 'Bed Room',
  image: '/9.png',
}

export default function RoomInspiration() {
  return (
    <section className="relative bg-[#FCF8F3] px-4 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button className="bg-[#B88E2F] text-white px-6 py-3 rounded hover:bg-[#96732A] transition-colors">
              Explore More
            </button>
          </div>

          {/* Right Content - Single Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              {/* Main Image */}
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Slide Info */}
              <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  01 — {slide.category}
                </p>
                <h3 className="text-lg font-semibold">{slide.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

