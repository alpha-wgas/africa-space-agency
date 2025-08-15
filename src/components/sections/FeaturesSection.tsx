import { ArrowRight,  } from 'lucide-react'


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
  const features = [
    {
      title: "Historical Timeline",
      description: "African Space Agency's journey, from policy frameworks to headquarters in Egypt, shaping Africa's space ambitions.",
      image: 'https://res.cloudinary.com/dondpcuxz/image/upload/v1755252899/historical-timeline_nn7e4j.png'
    },
    {
      title: "Leadership",
      description: "Meet the leaders and visionaries driving Africa's space exploration and innovation efforts.",
      image: 'https://res.cloudinary.com/dondpcuxz/image/upload/v1755252900/leadership_xhwruk.png'
    },
    {
      title: "Members Countries",
      description: "Discover the African countries contributing to space science, innovation, and technological advancement.",
      image: 'https://res.cloudinary.com/dondpcuxz/image/upload/v1755252900/members-countries_c7aobw.png'
    }
  ]

  const handleLearnMore = (title: string) => {
    console.log(`Learn more about: ${title}`)
    // Navigate to specific page or open modal
  }

  return (
    <section className={`py-16 ${className}`} aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">


        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
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