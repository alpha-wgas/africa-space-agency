import { ArrowUpRight } from 'lucide-react'
import { spaceSovereigntyImage } from '../../assets'

interface PriorityCardProps {
  title: string
  description: string
  image: string
  category?: string
}

const PriorityCard = ({ title, description, image, category }: PriorityCardProps) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-6">
      <h3 className="text-lg font-bold font-pt-serif text-gray-900 mb-3 group-hover:text-wine-100 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-700 text-sm font-satoshi leading-relaxed">
        {description}
      </p>
      
      {category && (
        <span className="inline-block mt-3 text-xs font-medium font-satoshi text-wine-100 bg-wine-100/10 px-2 py-1 rounded">
          {category}
        </span>
      )}
    </div>
  </article>
)

interface PrioritiesSectionProps {
  className?: string
}

const PrioritiesSection = ({ className }: PrioritiesSectionProps) => {
  const priorities = [
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

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="priorities-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 
              id="priorities-title"
              className="text-3xl font-bold font-pt-serif text-gray-900"
            >
              Priorities of AFSA
            </h2>
            <div className="hidden sm:flex items-center space-x-4">
              <button className=" justify-start pr-3 mr-0 text-base font-medium font-satoshi text-black border-b-4 border-wine-100  hover:bg-wine-100 hover:text-white transition-colors duration-200">
                Strategic Pillars
              </button>
              <button className=" pl-0 text-base font-medium font-satoshi text-gray-600 border-b-4 border-gray-300  hover:bg-gray-50 transition-colors duration-200">
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

        {/* Priority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {priorities.map((priority, index) => (
            <PriorityCard
              key={index}
              title={priority.title}
              description={priority.description}
              image={priority.image}
              category={priority.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrioritiesSection