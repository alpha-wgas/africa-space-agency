import { spaceSovereigntyImage } from '../../assets'

interface InaugurationHeroSectionProps {
  className?: string
}

const InaugurationHeroSection = ({ className }: InaugurationHeroSectionProps) => {
  return (
    <section className={`relative min-h-[500px] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={spaceSovereigntyImage}
          alt="African Space Agency Building"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Green Border Elements */}
      <div className="absolute top-0 left-0 w-full h-3 bg-forestGreen-100" />
      <div className="absolute bottom-0 left-0 w-full h-3 bg-forestGreen-100" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-normal font-pt-serif text-white                     mb-6 leading-tight">
              African Space Agency Officially Inaugurated in Cairo
            </h1>
            
            <p className="text-lg text-gray-200 font-satoshi mb-8 leading-relaxed">
              The African Union Commission (AUC) officially inaugurated the African Space 
              Agency (AfSA) during the 2025 NewSpace Africa Conference, held at Egypt 
              Space City in Cairo, Egypt. The historic launch marks a significant milestone in 
              Africa's space journey, positioning AfSA as the central body to drive 
              continental cooperation and innovation in space science and technology.
            </p>

            <button className="inline-flex items-center px-8 py-4 bg-wine-100 hover:bg-wine-200 text-white font-semibold font-satoshi rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default InaugurationHeroSection