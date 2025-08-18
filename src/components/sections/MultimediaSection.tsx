import { useState } from 'react'
import { Play } from 'lucide-react'
import { spaceSovereigntyImage } from '../../assets'
import ViewAllButton from '../ui/ViewAllButton'

interface VideoCardProps {
  title: string
  description: string
  thumbnail: string
  duration?: string
  category?: string
  featured?: boolean
  onPlay: () => void
}

const VideoCard = ({ title, description, thumbnail, duration, category, featured = false, onPlay }: VideoCardProps) => {
  if (featured) {
    return (
      <article className="relative group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          
          <button
            onClick={onPlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play video: ${title}`}
          >
            <div className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <Play className="h-6 w-6 text-wine-100 ml-1" fill="currentColor" />
            </div>
          </button>

          {duration && (
            <span className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-medium font-satoshi px-2 py-1 rounded">
              {duration}
            </span>
          )}

          {category && (
            <span className="absolute top-4 left-4 bg-wine-100 text-white text-xs font-medium font-satoshi px-2 py-1 rounded">
              {category}
            </span>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold font-pt-serif text-gray-900 mb-2 group-hover:text-wine-100 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-700 text-sm font-satoshi leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    )
  }

  return (
    <article className="relative group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
        
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          <div className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Play className="h-4 w-4 text-wine-100 ml-0.5" fill="currentColor" />
          </div>
        </button>

        {category && (
          <span className="absolute top-2 left-2 bg-wine-100 text-white text-xs font-medium font-satoshi px-2 py-1 rounded">
            {category}
          </span>
        )}
      </div>

      <div className="p-4">
        <h4 className="text-sm font-bold font-pt-serif text-gray-900 mb-1 group-hover:text-wine-100 transition-colors duration-200 leading-tight">
          {title}
        </h4>
        <p className="text-gray-600 text-xs font-satoshi leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  )
}

interface MultimediaSectionProps {
  className?: string
}

const MultimediaSection = ({ className }: MultimediaSectionProps) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('videos')

  const videos = [
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY",
      description: "The African Space Agency was formally inaugurated on Sunday, 20th April 2025, during the NewSpace Africa Conference, gathering dignitaries worldwide, including ministers and ambassadors from various countries in Africa, and beyond to mark a new era of African space governance.",
      thumbnail: spaceSovereigntyImage,
      duration: "15:42",
      category: "Inauguration"
    },
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY", 
      description: "The African Space Agency was formally inaugurated on Sunday, 20th April 2025, during the NewSpace Africa Conference, gathering dignitaries worldwide, including ministers and ambassadors from various countries in Africa, and beyond to mark a new era of African space governance.",
      thumbnail: spaceSovereigntyImage,
      duration: "8:30",
      category: "Inauguration"
    },
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY",
      description: "The African Space Agency was formally inaugurated on Sunday, 20th April 2025, during the NewSpace Africa Conference, gathering dignitaries worldwide, including ministers and ambassadors from various countries in Africa, and beyond to mark a new era of African space governance.",
      thumbnail: spaceSovereigntyImage,
      duration: "12:15",
      category: "Inauguration"
    },
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY",
      description: "The African Space Agency was formally inaugurated on Sunday, 20th April 2025, during the NewSpace Africa Conference, gathering dignitaries worldwide, including ministers and ambassadors from various countries in Africa, and beyond to mark a new era of African space governance.",
      thumbnail: spaceSovereigntyImage,
      duration: "6:45", 
      category: "Inauguration"
    }
  ]

  const photos = [
    {
      id: 1,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 2,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 3,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 4,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 5,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 6,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 7,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 8,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 9,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    },
    {
      id: 10,
      image: spaceSovereigntyImage,
      title: "Africa space agency inauguration",
      date: "12/08/25"
    }
  ]

  const handlePlayVideo = (videoTitle: string) => {
    console.log(`Playing video: ${videoTitle}`)
    // Implement video player modal or navigation
  }

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="multimedia-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 
              id="multimedia-title"
              className="text-3xl font-pt-serif text-gray-900"
            >
              Multimedia
            </h2>
            
            {/* Tab Buttons */}
            <div className="hidden sm:flex items-center">
              <button 
                onClick={() => setActiveTab('photos')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'photos'
                    ? 'text-black border-wine-100 '
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Photos
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'videos'
                    ? 'text-black border-wine-100 '
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Videos
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between ">
            <p className="text-gray-600 font-satoshi max-w-2xl text-lg lg:w-[387px]">
              Explore photos, videos, and highlights that capture AfSA's journey and impact across Africa's space landscape.
            </p>
            <ViewAllButton />
          </div>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'videos' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:h-[552px]">
            {/* First Column - Large Video */}
            <div className="lg:col-span-1 lg:w-[410px]">
              <div className="bg-white  overflow-hidden">
                <div className="relative">
                  <img
                    src={videos[0].thumbnail}
                    alt={videos[0].title}
                    className="w-full lg:h-[300px] object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      onClick={() => handlePlayVideo(videos[0].title)}
                      className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                      aria-label={`Play video: ${videos[0].title}`}
                    >
                      <Play className="h-8 w-8 text-white fill-current ml-1" />
                    </button>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className=" p-3">
                      <p className="text-xs font-medium font-satoshi text-gray-900">
                        {videos[0].title}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Video Description */}
                <div className="py-4 ">
                  <h3 className="text-lg font-medium font-pt-serif text-gray-900 mb-2">
                    {videos[0].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-satoshi leading-relaxed">
                    {videos[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Second Column - Video with Description */}
            <div className="lg:col-span-1  lg:w-[410px]">
              <div className="bg-white overflow-hidden">
                <div className="relative">
                  <img
                    src={videos[1].thumbnail}
                    alt={videos[1].title}
                    className="w-full lg:h-[300px] object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      onClick={() => handlePlayVideo(videos[1].title)}
                      className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                      aria-label={`Play video: ${videos[1].title}`}
                    >
                      <Play className="h-8 w-8 text-white fill-current ml-1" />
                    </button>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className=" p-3">
                      <p className="text-xs font-medium font-satoshi text-gray-900">
                        {videos[1].title}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Video Description */}
                <div className="py-4">
                  <h3 className="text-lg font-medium font-pt-serif text-gray-900 mb-2">
                    {videos[1].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-satoshi leading-relaxed">
                    {videos[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Third Column - Two Videos without Description */}
            <div className="lg:col-span-1 space-y-4 lg:w-[410px]">
              {videos.slice(2, 4).map((video, index) => (
                <div key={index + 2} className="bg-white  overflow-hidden">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-32 lg:h-[194px] object-cover"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <button
                        onClick={() => handlePlayVideo(video.title)}
                        className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                        aria-label={`Play video: ${video.title}`}
                      >
                        <Play className="h-6 w-6 text-white fill-current ml-0.5" />
                      </button>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute top-2 left-2 right-2">
                      <div className="  p-2">
                        <p className="text-sm font-medium font-satoshi text-gray-900">
                          {video.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Only Title - No Description */}
                  <div className="py-1">
                    <h4 className="text-lg font-medium font-pt-serif text-gray-900">
                      {video.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* First Column - Larger Photos */}
            <div className="lg:col-span-1 space-y-4 ">
              {photos.slice(0, 2).map((photo) => (
                <div key={photo.id} className="bg-white overflow-hidden lg:w-[355px]">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="py-3">
                    <p className="text-xs text-gray-500 font-satoshi mb-1">
                      {photo.date}
                    </p>
                    <p className="text-sm font-medium font-pt-serif text-gray-900">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining Columns - Smaller Photos */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
              {photos.slice(2).map((photo) => (
                <div key={photo.id} className=" overflow-hidden lg:w-[195px]">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-300"
                    
                  />
                  <div className="p-3">
                    <p className="text-xs text-gray-500 font-satoshi mb-1">
                      {photo.date}
                    </p>
                    <p className="text-sm font-medium font-pt-serif text-gray-900">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MultimediaSection