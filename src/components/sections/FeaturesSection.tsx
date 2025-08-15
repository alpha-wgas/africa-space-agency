import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { historicalTimelineImage, membersCountriesImage, leadershipImage } from '../../assets'

interface FeatureCardProps {
  image: string
  title: string
  description: string
  linkText?: string
  onLearnMore?: () => void
}

const FeatureCard = ({ image, title, description, linkText = "Learn More", onLearnMore }: FeatureCardProps) => (
  <article className="bg-gray-50 hover:bg-wine-200 group cursor-pointer overflow-hidden px-8 py-6 inline-flex justify-center items-start gap-2 transition-all duration-300">
    <div className="w-80 inline-flex flex-col justify-start items-start gap-8">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="">
        <h3 className="text-2xl font-bold font-pt-serif text-gray-900 group-hover:text-white mb-3 justify-start transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 text-lg group-hover:text-white font-satoshi leading-relaxed mb-4 justify-start transition-colors duration-300">
          {description}
        </p>
      </div>
      <button
        onClick={onLearnMore}
        className="inline-flex items-center text-sm font-medium font-satoshi text-gray-900 group-hover:text-white transition-colors duration-300"
        aria-label={`Learn more about ${title}`}
      >
        {linkText}
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  </article>
)

interface FeaturesSectionProps {
  className?: string
}

const FeaturesSection = ({ className }: FeaturesSectionProps) => {
  const [activeTab, setActiveTab] = useState<'strategic' | 'programmes'>('strategic')

  const strategicFeatures = [
    {
      title: "Historical Timeline",
      description: "African Space Agency's journey, from policy frameworks to headquarters in Egypt, shaping Africa's space ambitions.",
      image: historicalTimelineImage
    },
    {
      title: "Leadership",
      description: "Meet the leaders and visionaries driving Africa's space exploration and innovation efforts.",
      image: leadershipImage
    },
    {
      title: "Members Countries",
      description: "Discover the African countries contributing to space science, innovation, and technological advancement.",
      image: membersCountriesImage
    }
  ]

  const programmesFeatures = [
    {
      title: "Earth Observation",
      description: "Satellite-based monitoring systems for climate change, agriculture, and natural resource management across Africa.",
      image: historicalTimelineImage
    },
    {
      title: "Satellite Connectivity",
      description: "Building telecommunications infrastructure to bridge the digital divide across rural and remote African regions.",
      image: leadershipImage
    },
    {
      title: "Capacity Building",
      description: "Training programs and educational initiatives to develop Africa's next generation of space professionals.",
      image: membersCountriesImage
    }
  ]

  const currentFeatures = activeTab === 'strategic' ? strategicFeatures : programmesFeatures

  const handleLearnMore = (title: string) => {
    console.log(`Learn more about: ${title}`)
    // Navigate to specific page or open modal
  }

  return (
    <section className={`py-16 ${className}`} aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 
              id="features-title"
              className="text-3xl font-bold font-pt-serif text-gray-900"
            >
              About AFSA
            </h2>
            
            {/* Tab Buttons with Connected Borders */}
            <div className="hidden sm:flex items-center">
              <button 
                onClick={() => setActiveTab('strategic')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'strategic'
                    ? 'text-black border-wine-100 bg-wine-100/10'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Strategic Pillars
              </button>
              <button 
                onClick={() => setActiveTab('programmes')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'programmes'
                    ? 'text-black border-wine-100 bg-wine-100/10'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Programmes
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-satoshi max-w-2xl text-lg">
              Harnessing Space Technology for Africa's <br/> Sustainable Development
            </p>
            <button className="inline-flex items-center text-sm font-medium font-satoshi text-wine-100 hover:text-wine-200 transition-colors duration-200 group">
              View all
              <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFeatures.map((feature, index) => (
            <FeatureCard
              key={`${activeTab}-${index}`}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              onLearnMore={() => handleLearnMore(feature.title)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection