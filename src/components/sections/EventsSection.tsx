import { ArrowUpRight, Calendar, MapPin } from 'lucide-react'
import { spaceSovereigntyImage } from '../../assets'

interface EventCardProps {
  title: string
  date: string
  location?: string
  description: string
  image?: string
  featured?: boolean
  category?: string
}

const EventCard = ({ title, date, location, description, image, featured = false, category }: EventCardProps) => {
  if (featured) {
    return (
      <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={image || spaceSovereigntyImage}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-wine-100 font-medium font-satoshi mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
          <h3 className="text-xl font-bold font-pt-serif text-gray-900 mb-3">
            {title}
          </h3>
          {location && (
            <div className="flex items-center text-sm text-gray-600 font-satoshi mb-3">
              <MapPin className="h-4 w-4 mr-2" />
              {location}
            </div>
          )}
          <p className="text-gray-700 font-satoshi leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <img
            src={image || spaceSovereigntyImage}
            alt={title}
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          {category && (
            <span className="inline-block text-xs font-medium font-satoshi text-wine-100 bg-wine-100/10 px-2 py-1 rounded mb-2">
              {category}
            </span>
          )}
          <h4 className="text-sm font-bold font-pt-serif text-gray-900 mb-1 leading-tight">
            {title}
          </h4>
          <div className="flex items-center text-xs text-gray-600 font-satoshi mb-1">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
          <p className="text-xs text-gray-600 font-satoshi leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

interface EventsSectionProps {
  className?: string
}

const EventsSection = ({ className }: EventsSectionProps) => {
  const featuredEvent = {
    title: "African Space Agency to be Inaugurated in 2025",
    date: "20 May '25",
    location: "Cairo, Egypt",
    description: "Historic inauguration ceremony marking the official establishment of the African Space Agency headquarters in Cairo, bringing together African space leaders and international partners.",
    image: spaceSovereigntyImage
  }

  const upcomingEvents = [
    {
      title: "Attend the African Space Solutions Market",
      date: "21 Jul '25",
      description: "Connecting space industry professionals across Africa for collaboration and innovation.",
      category: "MASS",
      image: spaceSovereigntyImage
    },
    {
      title: "Attend the African Space Solutions Market",
      date: "21 Jul '25", 
      description: "Second session focusing on emerging space technologies and applications.",
      category: "MASS",
      image: spaceSovereigntyImage
    },
    {
      title: "Cairo to Host NewSpace Africa Conference in April 2025",
      date: "21 Jul '25",
      description: "Premier African space conference bringing together industry leaders.",
      category: "MASS",
      image: spaceSovereigntyImage
    },
    {
      title: "Cairo to Host NewSpace Africa Conference in April 2025", 
      date: "21 Jul '25",
      description: "Follow-up conference sessions and networking opportunities.",
      category: "MASS",
      image: spaceSovereigntyImage
    },
    {
      title: "Call for Applications - African Space Solutions Market (MASS) 2025",
      date: "21 Jul '25",
      description: "Open applications for participation in Africa's leading space solutions marketplace.",
      category: "MASS",
      image: spaceSovereigntyImage
    },
    {
      title: "Call for Applications - African Space Solutions Market (MASS) 2025",
      date: "21 Jul '25", 
      description: "Extended deadline for applications with additional opportunities.",
      category: "MASS",
      image: spaceSovereigntyImage
    }
  ]

  return (
    <section className={`py-16 bg-gray-50 ${className}`} aria-labelledby="events-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 
              id="events-title"
              className="text-2xl font-bold font-pt-serif text-gray-900 mb-2"
            >
              Events to look forward to
            </h2>
            <p className="text-gray-600 font-satoshi">
              Discover upcoming AFSA events, launches, and space-related activities.
            </p>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium font-satoshi text-wine-100 border border-wine-100 rounded hover:bg-wine-100 hover:text-white transition-colors duration-200">
              Upcoming
            </button>
            <button className="px-4 py-2 text-sm font-medium font-satoshi text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200">
              Press Release
            </button>
            <button className="inline-flex items-center text-sm font-medium font-satoshi text-wine-100 hover:text-wine-200 transition-colors duration-200 group">
              View all
              <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Events Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Event */}
          <div className="lg:col-span-1">
            <EventCard
              {...featuredEvent}
              featured={true}
            />
          </div>

          {/* Upcoming Events Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  category={event.category}
                  image={event.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection