import { ArrowRight } from 'lucide-react'
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
      category: "Inauguration",
      date: "12/08/25"
    },
    {
      id: 2, 
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      category: "Inauguration",
      date: "12/08/25"
    },
    {
      id: 3,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration", 
      category: "Inauguration",
      date: "12/08/25"
    },
    {
      id: 4,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      category: "Inauguration",
      date: "12/08/25"
    }
  ]

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="media-gallery-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:h-[552px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12  ">
       
          <div className="order-2 lg:order-1 lg:w-[411px]  px-5">
            <p className="text-sm font-medium font-satoshi text-wine-100 mb-4 tracking-wide bg-duskySky-100 inline-block rounded-lg px-2 ">
              Key Highlight
            </p>
            
            <h2 
              id="media-gallery-title"
              className="text-3xl lg:text-4xl font-normal font-pt-serif text-gray-900 mb-6 leading-tight"
            >
              Through the Lens of AFSA
            </h2>
            
            <p className="text-gray-700 font-satoshi leading-relaxed mb-8 text-justify">
              Step into the journey of Africa's space story, from groundbreaking launches to behind-the-scenes moments, our gallery brings AFSA's vision to life through powerful visuals.
            </p>

            <button className="inline-flex items-center px-6 py-3 bg-wine-100 hover:bg-wine-200 text-white font-medium font-satoshi rounded transition-colors duration-200 group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1  transition-transform duration-200" />
            </button>
          </div>

          {/* Right Image Grid */}
          <div className="order-1 lg:order-2 lg:w-[410px]">
            
                  <img
                    src={spaceSovereigntyImage}
                    alt="inauguaral"
                    className='h-auto lg:h-[300px] lg:w-[410px]' 
                  />
                  <div className="mt-8 ">
          
                  <h3 className="text-2xl font-normal font-pt-serif text-gray-900 mb-4">
                    THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY
                  </h3>
                  <p className="text-gray-700 font-satoshi leading-relaxed max-w-4xl mx-auto text-lg">
                    The African Space Agency was formally inaugurated on Sunday, 20th April 2025, during the NewSpace Africa Conference, gathering dignitaries worldwide, including ministers and ambassadors from various countries in Africa, and beyond to mark a new era of African space governance.
                  </p>
            
                  </div>
                  </div>
            <div className="order-1 lg:order-2 lg:w-[410px] h-full">
              <div className="grid grid-cols-2 gap-4">
              {mediaItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative group cursor-pointer overflow-hidden   transition-all duration-300"
                  >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 h-44 "
                  />
                  
                  <p className='text-gray-100 text-sm py-3'>{item.date}</p>
                  
                
                    <h3 className=" text-lg py-2 font-medium  group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.title}
                    </h3>
                    
                
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Featured Content */}

      </div>
    </section>
  )
}

export default MediaGallery