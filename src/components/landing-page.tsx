import { landingPageImage, spaceSovereigntyImage, continentalInovationImage } from '../assets'
import WhoAreWe from './sections/WhoAreWe'
import FeaturesSection from './sections/FeaturesSection'
import PrioritiesSection from './sections/PrioritiesSection'
import MissionCarousel from './sections/MissionCarousel'
import EventsSection from './sections/EventsSection'
import MediaGallery from './sections/MediaGallery'
import MultimediaSection from './sections/MultimediaSection'
import ResourcesSection from './sections/ResourcesSection'
import Footer from './sections/Footer'

const LandingPage = () => {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
     
            <div className="lg:col-span-1">
              {/* Main article */}
              <article className="group cursor-pointer">
                <div className="mb-6 overflow-hidden ">
                  <img 
                    src={landingPageImage}
                    alt="Space debris visualization showing active and inactive satellites around Earth"
                    className="w-full h-64 object-cover shadow-lg bg-black group-hover:scale-95 transition-transform duration-300"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                  A visualization of active and inactive satellites, discarded rocket bodies, orbital debris and other space objects 
                  around Earth, showing an increasingly cluttered and hazardous Earth orbit. Credit: AstriaGraph by the University of 
                  Texas at Austin.
                  </p>
                </div>

                <h1 className="text-3xl font-pt-serif font-bold text-gray-900 mb-4 group-hover:underline group-hover:decoration-wine-100 group-hover:underline-offset-4 transition-all duration-300">
                  Open letter from the Global Space Council: 
                  Governments must address a growing crisis in our orbits
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  The space sector is evolving faster than most realise. We're on the brink of a new space 
                  economy, one full of global opportunities. Yet that potential is now in serious jeopardy. 
                  That's why we, as space leaders, experts, astronauts, and former policymakers, have 
                  created the Global Space Council.
                </p>
              </article>
            </div>

            {/* Right column - Side articles */}
            <div className="space-y-8">
              {/* Article 1 */}
              <article className="overflow-hidden grid grid-cols-2 group cursor-pointer">
                <div>
                  <div className="overflow-hidden">
                    <img 
                      src={spaceSovereigntyImage} 
                      alt="AFSA meeting at the AU Mid-Year coordinators meeting"
                      className="w-full h-48 object-cover group-hover:scale-95 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-2 font-satoshi">
                    AFSA meeting at the AU Mid-Year coordinators meeting
                  </p>
                </div>

                <div className="px-3">
                  <h2 className="text-2xl font-bold font-pt-serif text-gray-900 mb-3 group-hover:underline group-hover:decoration-wine-100 group-hover:underline-offset-4 transition-all duration-300">
                    Space and Sovereignty: Africa's Ascent in a Changing World
                  </h2>
 
                  <p className="text-gray-700 text-sm">
                    President of the Council of the African Space Agency, shared his remarks in 
                    response to the address by H.E. Mahmoud Ali Youssouf, offering a reflection that 
                    echoed far beyond the room: Africa is not rising, it is already moving.
                  </p>
                </div>
              </article>

              {/* Article 2 */}
              <article className="overflow-hidden grid grid-cols-2 group cursor-pointer">
               
                  <div className="">
                    <div className="overflow-hidden">
                      <img 
                        src={continentalInovationImage}
                        alt="Global Gateway logo"
                        className="h-48 mr-4 pb-5 group-hover:scale-95 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-gray-600 text-sm mb-2 font-satoshi">
                    Africa - EU Space Partnership Programme
                  </p>
                  </div>
                  <div className='px-3'>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 font-pt-serif group-hover:underline group-hover:decoration-wine-100 group-hover:underline-offset-4 transition-all duration-300">
                    Continental Innovation Tender Announcement Under the Africa-EU Space 
                    Partnership Programme
                  </h2>
                  
                  <p className="text-gray-700 text-sm">
                    This tender seeks to implement the activities associated with the Continental 
                    Innovation component of the EU-Africa Space Partnership Programme(AESPP), 
                    funded by DG INTPA under the Global Gateway Initiative.
                  </p>
                  </div>
               
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* All Additional Sections */}
      <WhoAreWe />
      <FeaturesSection />
      <PrioritiesSection />
      <MissionCarousel />
      <EventsSection />
      <MediaGallery />
      <MultimediaSection />
      <ResourcesSection />
      <Footer />
    </div>
  )
}

export default LandingPage