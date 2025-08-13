const LandingPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main article */}
          <div className="lg:col-span-2">
            {/* Space visualization image */}
            <div className="mb-6">
              <img 
                src="/api/placeholder/500/300" 
                alt="Space debris visualization showing active and inactive satellites around Earth"
                className="w-full h-80 object-cover rounded-lg shadow-lg bg-black"
              />
              <p className="text-sm text-gray-600 mt-2">
                A visualization of active and inactive satellites, discarded rocket bodies, orbital debris and other space 
                objects around Earth, showing an increasingly cluttered and hazardous Earth orbit. Credit: AstraGraph 
                by the University of Texas at Austin.
              </p>
            </div>

            {/* Main article */}
            <article>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
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
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/api/placeholder/300/200" 
                alt="AFSA meeting at the AU Mid-Year coordinators meeting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Space and Sovereignty: Africa's Ascent in a Changing World
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  AFSA meeting at the AU Mid-Year coordinators meeting
                </p>
                <p className="text-gray-700 text-sm">
                  President of the Council of the African Space Agency, shared his remarks in 
                  response to the address by H.E. Mahmoud Ali Youssouf, offering a reflection that 
                  echoed far beyond the room: Africa is not rising, it is already moving.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/api/placeholder/60/60" 
                    alt="Global Gateway logo"
                    className="w-15 h-15 mr-4"
                  />
                  <img 
                    src="/api/placeholder/60/40" 
                    alt="EU flag"
                    className="w-12 h-8"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Continental Innovation Tender Announcement Under the Africa-EU Space 
                  Partnership Programme
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  Africa - EU Space Partnership Programme
                </p>
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
    </main>
  )
}

export default LandingPage