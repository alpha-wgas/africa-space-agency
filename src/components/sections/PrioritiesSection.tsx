import { useState } from 'react'
import { spaceSovereigntyImage } from '../../assets'
import ViewAllButton from '../ui/ViewAllButton'

interface PriorityCardProps {
  title: string
  description: string
  image: string

}

const PriorityCard = ({ title, description, image }: PriorityCardProps) => (
  <article className="bg-duskySky-100  overflow-hidden  hover:bg-wine-200 hover:text-white transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-6">
      <h3 className="text-lg font-normal font-pt-serif text-gray-900 mb-3 group-hover:text-white transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-700 group-hover:text-white text-sm font-satoshi leading-relaxed">
        {description}
      </p>
      
      
    </div>
  </article>
)

interface PrioritiesSectionProps {
  className?: string
}

const PrioritiesSection = ({ className }: PrioritiesSectionProps) => {
  const [activeTab, setActiveTab] = useState<'strategic' | 'programmes'>('strategic')

  const strategicPriorities = [
    {
      title: "Earth Observation",
      description: "Satellites have become essential tools for African countries, especially in managing natural resources and preventing disasters.",
      image: spaceSovereigntyImage,
      category: "Remote Sensing"
    },
    {
      title: "Satellite Connectivity",
      description: "Satellite communication is vital in bridging the digital divide in rural and landlocked areas where laying terrestrial cables is a challenge.",
      image: spaceSovereigntyImage,
      category: "Communications"
    },
    {
      title: "Astronomy",
      description: "Astronomy extends beyond studying planets; it explores the universe and advances our understanding of physics, chemistry, and mathematics.",
      image: spaceSovereigntyImage,
      category: "Scientific Research"
    },
    {
      title: "Navigation and Positioning",
      description: "Intelligent transportation systems utilize navigation technology to enhance road, air, and sea transport, especially for cross-border fleet management.",
      image: spaceSovereigntyImage,
      category: "Transportation"
    }
  ]

  const programmesPriorities = [
    {
      title: "GMES & Africa",
      description: "Earth observation program providing satellite data for environmental monitoring, disaster management, and sustainable development across Africa.",
      image: spaceSovereigntyImage,
      category: "Earth Observation"
    },
    {
      title: "Capacity Building",
      description: "Educational and training initiatives to develop technical expertise and institutional capacity in space technologies across African nations.",
      image: spaceSovereigntyImage,
      category: "Education"
    },
    {
      title: "Regional Cooperation",
      description: "Fostering partnerships between African countries and international partners to advance space technology and knowledge sharing.",
      image: spaceSovereigntyImage,
      category: "Partnership"
    },
    {
      title: "Resource Management",
      description: "Utilizing space-based technologies for sustainable management of Africa's natural resources and environmental protection.",
      image: spaceSovereigntyImage,
      category: "Sustainability"
    }
  ]

  const currentPriorities = activeTab === 'strategic' ? strategicPriorities : programmesPriorities

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="priorities-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 
              id="priorities-title"
              className="text-3xl  font-pt-serif text-gray-900"
            >
              {activeTab === 'strategic' ? 'Priorities of AFSA' : 'AfSA Programme'}
            </h2>
            
            {/* Tab Buttons */}
            <div className="hidden sm:flex items-center">
              <button 
                onClick={() => setActiveTab('strategic')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'strategic'
                    ? 'text-black border-wine-100 '
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Strategic Pillars
              </button>
              <button 
                onClick={() => setActiveTab('programmes')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'programmes'
                    ? 'text-black border-wine-100 '
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Programmes
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-satoshi max-w-2xl text-lg lg:w-auto">
              {activeTab === 'strategic' 
                ? 'Harnessing Space Technology for Africa\'s Sustainable Development'
                : 'A landmark partnership between Africa and Europe, GMES & Africa fosters capacity building, climate resilience, and resource management through satellite data and regional expertise.'
              }
            </p>
            <ViewAllButton />
          </div>
        </div>

        {/* Priority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPriorities.map((priority, index) => (
            <PriorityCard
              key={`${activeTab}-${index}`}
              title={priority.title}
              description={priority.description}
              image={priority.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrioritiesSection