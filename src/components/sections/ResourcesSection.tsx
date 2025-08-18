import { Download, Eye } from 'lucide-react'
import { spaceSovereigntyImage } from '../../assets'
import ViewAllButton from '../ui/ViewAllButton'

interface ResourceCardProps {
  title: string
  description: string
  date: string
  category: string
  downloadUrl?: string
  viewUrl?: string
  thumbnail?: string
}

const ResourceCard = ({ title, description, date, category, downloadUrl, viewUrl, thumbnail }: ResourceCardProps) => (
  <article className="bg-white overflow-hidden">
    <div className="relative mb-4">
      <img
        src={thumbnail || spaceSovereigntyImage}
        alt={title}
        className="w-full h-64 object-cover"
      />
    </div>
    
    <div className="space-y-3">
      <div className="flex items-center text-sm text-gray-600 font-satoshi">
        <span>{category}</span>
        <span className="mx-2">|</span>
        <span>{date}</span>
      </div>
      
      <h3 className="text-lg font-medium font-pt-serif text-gray-900 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-700 text-sm font-satoshi leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center space-x-3 pt-2">
        {downloadUrl && (
          <button className="inline-flex items-center px-4 py-2 bg-wine-100 hover:bg-wine-200 text-white text-sm font-medium font-satoshi transition-colors duration-200">
            Download
          </button>
        )}
        
        {viewUrl && (
          <button className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium font-satoshi transition-colors duration-200">
            View
          </button>
        )}
      </div>
    </div>
  </article>
)

interface ResourcesSectionProps {
  className?: string
}

const ResourcesSection = ({ className }: ResourcesSectionProps) => {
  const resources = [
    {
      title: "African Space Policy Framework",
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides a...",
      date: "July 2025",
      category: "Legal Foundations",
      downloadUrl: "/downloads/space-policy-framework.pdf",
      viewUrl: "/view/space-policy-framework",
      thumbnail: spaceSovereigntyImage
    },
    {
      title: "African Space Strategy",
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides a...",
      date: "July 2025", 
      category: "Legal Foundations",
      downloadUrl: "/downloads/space-strategy.pdf",
      viewUrl: "/view/space-strategy",
      thumbnail: spaceSovereigntyImage
    },
    {
      title: "African Space Agency Act",
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides a...",
      date: "July 2025",
      category: "Legal Foundations", 
      downloadUrl: "/downloads/space-agency-act.pdf",
      viewUrl: "/view/space-agency-act",
      thumbnail: spaceSovereigntyImage
    },
    {
      title: "African Space Strategy",
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides a...",
      date: "July 2025",
      category: "Legal Foundations",
      downloadUrl: "/downloads/space-strategy-2.pdf", 
      viewUrl: "/view/space-strategy-2",
      thumbnail: spaceSovereigntyImage
    }
  ]

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="resources-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 relative pb-2">
          <h2 
            id="resources-title"
            className="text-lg font-medium text-gray-900 border-b-2 border-wine-100 relative z-10 pb-2 "
          >
            KEY RESOURCES
          </h2>
          
          <ViewAllButton />
          
          {/* Full width gray underline */}
          <div className="absolute bottom-2.5 left-0 right-0 h-0.5 bg-gray-200"></div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              date={resource.date}
              category={resource.category}
              downloadUrl={resource.downloadUrl}
              viewUrl={resource.viewUrl}
              thumbnail={resource.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection