import { whoWeAreImage } from '../../assets'

interface WhoAreWeProps {
  className?: string
}

const WhoAreWe = ({ className }: WhoAreWeProps) => {
  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="who-are-we-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full border-b border-gray-200 mb-8">
        <h2 
          id="who-are-we-title"
          className="text-sm font-medium font-satoshi text-gray-600 tracking-wide uppercase border-b-2 border-wine-100 inline-block pb-2"
        >
          WHO ARE WE
        </h2>
      </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
      
          {/* Left - Image (733px equivalent - wider) */}
          <div className="flex-shrink-0 lg:w-[58.7%]">
            <img
              src={whoWeAreImage}
              alt="AFSA leadership meeting with African dignitaries around conference table"
              className="w-full h-64 lg:h-80 object-cover "
            />
          </div>

          {/* Right - Red Card (515.11px equivalent - narrower) */}
          <div className="flex-1 lg:w-[41.3%] h-64 lg:h-80">
            <div className="bg-wine-100 p-8 lg:p-10 text-white h-full flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-pt-serif font-bold leading-tight mb-6">
                The African Space Agency is the primary point of contact for Africa's cooperation with Europe and other international partners.
              </h3>
              
              <p className="text-sm lg:text-base font-satoshi leading-relaxed opacity-90">
                One of its key objectives, as outlined in the African Space Agency Act, is to enhance space missions across Africa by offering critical space-related information, services, and products.
              </p>
            </div>
          </div>
        </div>

     
      </div>
    </section>
  )
}

export default WhoAreWe