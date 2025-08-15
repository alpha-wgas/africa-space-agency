import { useState } from 'react'
import { Play, ArrowUpRight } from 'lucide-react'
import { spaceSovereigntyImage } from '../../assets'

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
      description: "The African Space Agency was formally inaugurated on Sunday, 20th April 2025, during the NewSpace Africa Conference, gathering dignitaries worldwide.",
      thumbnail: spaceSovereigntyImage,
      duration: "15:42",
      category: "Inauguration",
      featured: true
    },
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY", 
      description: "Extended coverage of the historic inauguration ceremony with speeches from African leaders.",
      thumbnail: spaceSovereigntyImage,
      duration: "8:30",
      category: "Inauguration"
    },
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY",
      description: "Behind-the-scenes footage from the inauguration event showcasing preparation and logistics.",
      thumbnail: spaceSovereigntyImage,
      duration: "12:15",
      category: "Inauguration"
    },
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY",
      description: "International perspectives and reactions to the African Space Agency establishment.",
      thumbnail: spaceSovereigntyImage,
      duration: "6:45", 
      category: "Inauguration"
    },
    {
      title: "THE INAUGURATION CEREMONY OF THE AFRICAN SPACE AGENCY",
      description: "Future vision presentation outlining AFSA's strategic goals and roadmap.",
      thumbnail: spaceSovereigntyImage,
      duration: "10:20",
      category: "Inauguration"
    }
  ]

  const handlePlayVideo = (videoTitle: string) => {
    console.log(`Playing video: ${videoTitle}`)
    // Implement video player modal or navigation
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`} aria-labelledby="multimedia-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 
              id="multimedia-title"
              className="text-2xl font-bold font-pt-serif text-gray-900 mb-2"
            >
              Multimedia
            </h2>
            <p className="text-gray-600 font-satoshi">
              Explore photos, videos, and highlights that capture AFSA's journey and impact across Africa's space landscape.
            </p>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-4 py-2 text-sm font-medium font-satoshi rounded-md transition-colors duration-200 ${
                  activeTab === 'photos'
                    ? 'bg-wine-100 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 py-2 text-sm font-medium font-satoshi rounded-md transition-colors duration-200 ${
                  activeTab === 'videos'
                    ? 'bg-wine-100 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Videos
              </button>
            </div>
            
            <button className="inline-flex items-center text-sm font-medium font-satoshi text-wine-100 hover:text-wine-200 transition-colors duration-200 group">
              View all
              <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Video */}
          <div className="lg:col-span-2">
            <VideoCard
              {...videos[0]}
              featured={true}
              onPlay={() => handlePlayVideo(videos[0].title)}
            />
          </div>

          {/* Video List */}
          <div className="space-y-4">
            {videos.slice(1).map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
                duration={video.duration}
                category={video.category}
                onPlay={() => handlePlayVideo(video.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MultimediaSection