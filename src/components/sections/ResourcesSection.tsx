import { Download, Eye, ArrowUpRight } from 'lucide-react'

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
  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
    {thumbnail && (
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-32 object-cover"
      />
    )}
    
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium font-satoshi text-wine-100 bg-wine-100/10 px-2 py-1 rounded">
          {category}
        </span>
        <span className="text-xs text-gray-500 font-satoshi">
          {date}
        </span>
      </div>
      
      <h3 className="text-lg font-bold font-pt-serif text-gray-900 mb-2 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-700 text-sm font-satoshi leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex items-center space-x-3">
        {downloadUrl && (
          <button className="inline-flex items-center px-4 py-2 bg-wine-100 hover:bg-wine-200 text-white text-sm font-medium font-satoshi rounded-lg transition-colors duration-200">
            <Download className="h-4 w-4 mr-2" />
            Download
          </button>
        )}
        
        {viewUrl && (
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm font-medium font-satoshi rounded-lg transition-colors duration-200">
            <Eye className="h-4 w-4 mr-2" />
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
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides a comprehensive framework for space development across Africa.",
      date: "July 2025",
      category: "Legal Foundations",
      downloadUrl: "/downloads/space-policy-framework.pdf",
      viewUrl: "/view/space-policy-framework"
    },
    {
      title: "African Space Strategy",
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides a strategic roadmap for continental space initiatives.",
      date: "July 2025", 
      category: "Legal Foundations",
      downloadUrl: "/downloads/space-strategy.pdf",
      viewUrl: "/view/space-strategy"
    },
    {
      title: "African Space Agency Act",
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides the legal foundation for AFSA establishment.",
      date: "July 2025",
      category: "Legal Foundations", 
      downloadUrl: "/downloads/space-agency-act.pdf",
      viewUrl: "/view/space-agency-act"
    },
    {
      title: "African Space Strategy",
      description: "The African Space Policy Framework, endorsed by the African Union Heads of State in January 2016, provides detailed implementation guidelines.",
      date: "July 2025",
      category: "Legal Foundations",
      downloadUrl: "/downloads/space-strategy-2.pdf", 
      viewUrl: "/view/space-strategy-2"
    }
  ]

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="resources-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 
              id="resources-title"
              className="text-2xl font-bold font-pt-serif text-gray-900 mb-2"
            >
              KEY RESOURCES
            </h2>
            <p className="text-gray-600 font-satoshi">
              Access essential documents, policies, and frameworks that guide Africa's space development.
            </p>
          </div>
          
          <button className="inline-flex items-center text-sm font-medium font-satoshi text-wine-100 hover:text-wine-200 transition-colors duration-200 group">
            View all
            <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              date={resource.date}
              category={resource.category}
              downloadUrl={resource.downloadUrl}
              viewUrl={resource.viewUrl}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-lg font-bold font-pt-serif text-gray-900 mb-4">
            Looking for more resources?
          </h3>
          <p className="text-gray-700 font-satoshi mb-6 max-w-2xl mx-auto">
            Explore our comprehensive library of space policies, technical documents, research publications, and collaboration frameworks.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-wine-100 hover:bg-wine-200 text-white font-medium font-satoshi rounded-lg transition-colors duration-200 group">
            Browse All Resources
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection