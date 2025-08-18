import { useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { spaceSovereigntyImage } from '../../assets'

interface CarouselSlide {
  id: number
  image: string
  title: string
  description?: string
}

interface MissionCarouselProps {
  className?: string
}

const MissionCarousel = ({ className }: MissionCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: CarouselSlide[] = [
    {
      id: 1,
      image: spaceSovereigntyImage,
      title: "NewSpace Convention",
      description: "Leading Africa's space innovation and collaboration"
    },
    {
      id: 2,
      image: spaceSovereigntyImage,
      title: "International Partnerships",
      description: "Building bridges with global space organizations"
    },
    {
      id: 3,
      image: spaceSovereigntyImage,
      title: "Capacity Building",
      description: "Developing Africa's space technology capabilities"
    }
  ]

  const missionPoints = [
    "Coordinate Space Efforts Across Africa",
    "Develop Strategic Space Programmes",
    "Support Local Capacity Building",
    "Promote Innovation and Economic Growth",
    "Lead Global and Continental Partnerships",
    "Implement African Space Policy and Strategy"
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className={`py-16 bg-wine-100 text-white ${className}`} aria-labelledby="mission-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium font-satoshi mb-4 opacity-90 px-4 py-2 rounded-2xl bg-wine-200 inline-block">
              What we do
            </p>
            
            <h2 
              id="mission-title"
              className="text-3xl lg:text-4xl font-normal font-pt-serif mb-8 leading-tight"
            >
              Driving Africa's Development Through Coordinated Space Innovation
            </h2>

            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check 
                    className="w-6 h-6 mt-0.5 flex-shrink-0 bg-wine-200 rounded-full overflow-hidden p-1" 
                    aria-hidden="true"
                  />
                  <p className="text-sm font-satoshi leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Carousel */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative h-80 overflow-hidden ">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                      <h3 className="text-lg font-bold font-pt-serif text-white mb-2">
                        {slide.title}
                      </h3>
                      {slide.description && (
                        <p className="text-sm font-satoshi text-white/90">
                          {slide.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots Navigation */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionCarousel