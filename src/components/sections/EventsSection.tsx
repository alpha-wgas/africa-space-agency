import { Calendar } from 'lucide-react'
import { useState } from 'react'
import { spaceSovereigntyImage } from '../../assets'
import ViewAllButton from '../ui/ViewAllButton'

interface EventCardProps {
  title: string
  date: string
  location?: string

  image?: string
  featured?: boolean
}

const EventCard = ({ title, date, image, featured = false }: EventCardProps) => {
  if (featured) {
    return (
      <article className=" bg-duskySky-100  overflow-hidden   transition-shadow duration-300 ">
        <img
          src={image || spaceSovereigntyImage}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
   
          <h3 className="text-xl font-normal font-pt-serif text-gray-900 mb-3">
            {title}
          </h3>
             <div className="flex items-center text-sm font-semibold font-satoshi mb- justify-start">
           
            {date}
          </div>
          
        </div>
      </article>
    )
  }

  return (
    <article className="bg-white    transition-shadow duration-200 ">
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <img
            src={image || spaceSovereigntyImage}
            alt={title}
            className="w-32 h-32  object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
         
          <h4 className="text-sm font-normal font-pt-serif text-gray-900 mb-1 leading-tight">
            {title}
          </h4>
          <div className="flex items-center text-sm text-gray-600 font-satoshi mb-1 pt-3">
          
            {date}
          </div>
         
        </div>
      </div>
    </article>
  )
}

interface EventsSectionProps {
  className?: string
}

const EventsSection = ({ className }: EventsSectionProps) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'events' | 'press'>('upcoming')

  const getTabConfig = () => {
    switch (activeTab) {
      case 'upcoming':
        return {
          title: "Events to look forward to",
          description: "Discover upcoming AFSA events, launches, and space-related activities.",
          featuredEvent: {
            title: "African Space Agency to be Inaugurated in 2025",
            date: "20 May '25",
            location: "Cairo, Egypt",
            description: "Historic inauguration ceremony marking the official establishment of the African Space Agency headquarters in Cairo, bringing together African space leaders and international partners.",
            image: spaceSovereigntyImage
          }
        }
      case 'events':
        return {
          title: "Events of AfSA",
          description: "Browse past AfSA events and key moments in Africa's space journey.",
          featuredEvent: {
            title: "African Space Week 2024",
            date: "15 Sep '24",
            location: "Addis Ababa, Ethiopia",
            description: "Successfully concluded week-long celebration showcasing African space achievements, bringing together 500+ delegates from across the continent to discuss the future of African space exploration.",
            image: spaceSovereigntyImage
          }
        }
      case 'press':
        return {
          title: "Stay in the loop of AFSA",
          description: "Get the latest news, updates, and milestones from the African Space Agency.",
          featuredEvent: {
            title: "AFSA Establishes First Continental Space Observatory",
            date: "12 Aug '25",
            location: "Cape Town, South Africa",
            description: "Major milestone as AFSA announces the establishment of Africa's first continental space observatory, marking a new era in African space research and international collaboration.",
            image: spaceSovereigntyImage
          }
        }
      default:
        return {
          title: "Events to look forward to",
          description: "Discover upcoming AFSA events, launches, and space-related activities.",
          featuredEvent: {
            title: "African Space Agency to be Inaugurated in 2025",
            date: "20 May '25",
            location: "Cairo, Egypt",
            description: "Historic inauguration ceremony marking the official establishment of the African Space Agency headquarters in Cairo, bringing together African space leaders and international partners.",
            image: spaceSovereigntyImage
          }
        }
    }
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

  const eventsList = [
    {
      title: "African Space Week 2025",
      date: "15 Sep '25",
      description: "Annual celebration of African space achievements and future missions.",
      category: "Conference",
      image: spaceSovereigntyImage
    },
    {
      title: "Satellite Launch Operations Training",
      date: "03 Oct '25",
      description: "Technical training program for satellite operations personnel.",
      category: "Training",
      image: spaceSovereigntyImage
    },
    {
      title: "Pan-African Space Cooperation Summit",
      date: "12 Nov '25",
      description: "High-level summit discussing space cooperation across African nations.",
      category: "Summit",
      image: spaceSovereigntyImage
    },
    {
      title: "Youth Space Challenge 2025",
      date: "25 Dec '25",
      description: "Educational competition for young African space enthusiasts.",
      category: "Competition",
      image: spaceSovereigntyImage
    }
  ]

  const pressReleases = [
    {
      title: "AFSA Signs Memorandum with ESA",
      date: "10 Aug '25",
      description: "Strategic partnership agreement signed with European Space Agency.",
      category: "Partnership",
      image: spaceSovereigntyImage
    },
    {
      title: "First African Satellite Manufacturing Facility",
      date: "05 Jul '25",
      description: "Announcement of the first indigenous satellite manufacturing facility in Africa.",
      category: "Infrastructure",
      image: spaceSovereigntyImage
    },
    {
      title: "African Space Data Center Operational",
      date: "20 Jun '25",
      description: "New data center begins operations to support African space missions.",
      category: "Technology",
      image: spaceSovereigntyImage
    },
    {
      title: "AFSA Launches Scholarship Program",
      date: "15 May '25",
      description: "New scholarship program for African students in space sciences.",
      category: "Education",
      image: spaceSovereigntyImage
    }
  ]

  const getCurrentTabEvents = () => {
    switch (activeTab) {
      case 'upcoming':
        return upcomingEvents
      case 'events':
        return eventsList
      case 'press':
        return pressReleases
      default:
        return upcomingEvents
    }
  }

  return (
    <section className={`py-16  ${className}`} aria-labelledby="events-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 
              id="events-title"
              className="text-3xl font-normal font-pt-serif text-gray-900 lg:w-96"
            >
              {getTabConfig().title}
            </h2>
            
            {/* Tab Buttons */}
            <div className="hidden sm:flex items-center">
              <button 
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'upcoming'
                    ? 'text-black border-wine-100 '
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Upcoming
              </button>
              <button 
                onClick={() => setActiveTab('events')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'events'
                    ? 'text-black border-wine-100 '
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Events
              </button>
              <button 
                onClick={() => setActiveTab('press')}
                className={`px-4 py-2 text-base font-medium font-satoshi border-b-4 transition-all duration-200 ${
                  activeTab === 'press'
                    ? 'text-black border-wine-100 '
                    : 'text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Press Release
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between ">
            <p className="text-gray-600 font-satoshi max-w-2xl text-lg lg:w-96">
              {getTabConfig().description}
            </p>
            <ViewAllButton />
          </div>
        </div>

        {/* Events Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
         
          <div className="lg:col-span-1">
            <EventCard
              {...getTabConfig().featuredEvent}
              featured={true}
            />
          </div>

          {/* Current Tab Events Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {getCurrentTabEvents().map((event, index) => (
                <EventCard
                  key={`${activeTab}-${index}`}
                  title={event.title}
                  date={event.date}
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