import { ArrowUpRight } from 'lucide-react'
import { spaceSovereigntyImage } from '../../assets'

interface MediaGalleryProps {
  className?: string
}

const MediaGallery = ({ className }: MediaGalleryProps) => {
  const mediaItems = [
    {
      id: 1,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      category: "Inauguration"
    },
    {
      id: 2, 
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      category: "Inauguration"
    },
    {
      id: 3,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration", 
      category: "Inauguration"
    },
    {
      id: 4,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      category: "Inauguration"
    }
  ]

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="media-gallery-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium font-satoshi text-gray-600 mb-4 tracking-wide uppercase">
              Key Highlight
            </p>
            
            <h2 
              id="media-gallery-title"
              className="text-3xl lg:text-4xl font-bold font-pt-serif text-gray-900 mb-6 leading-tight"
            >
              Through the Lens of AFSA
            </h2>
            
            <p className="text-gray-700 font-satoshi leading-relaxed mb-8">
              Step into the journey of Africa's space story, from groundbreaking launches to behind-the-scenes moments, our gallery brings AFSA's vision to life through powerful visuals.
            </p>

            <button className="inline-flex items-center px-6 py-3 bg-wine-100 hover:bg-wine-200 text-white font-medium font-satoshi rounded-lg transition-colors duration-200 group">
              Learn More
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {mediaItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                    index === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      index === 0 ? 'h-48' : 'h-32'
                    }`}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium font-satoshi opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.title}
                    </p>
                    <span className="inline-block mt-1 text-xs font-medium font-satoshi text-white/80 bg-white/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Featured Content */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold font-pt-serif text-gray-900 mb-4">
              THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY
            </h3>
            <p className="text-gray-700 font-satoshi leading-relaxed max-w-4xl mx-auto">
              The African Space Agency was formally inaugurated on Sunday, 20th April 2025, during the NewSpace Africa Conference, gathering dignitaries worldwide, including ministers and ambassadors from various countries in Africa, and beyond to mark a new era of African space governance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaGallery