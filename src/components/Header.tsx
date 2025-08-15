import { useState } from 'react'
import { GMIcon, SearchIcon } from '../assets'

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH')
  const [searchQuery, setSearchQuery] = useState('')

  const languages = ['FRANÇAIS', 'عربي', 'PORTUGUÊS', 'ENGLISH']

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-white border-b border-gray-200">
   
      <div className="bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
         
            <div className="flex items-center gap-2">
              <img src={GMIcon} alt="GM" className="h-5 w-5" />
              <span className="text-gray-100 text-sm font-medium font-satoshi">
                Welcome to AFSA
              </span>
            </div>

        
            <div className="flex items-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`text-sm font-medium font-satoshi px-2 py-1 rounded transition-colors ${
                    selectedLanguage === lang
                      ? 'text-gray-100 bg-gray-200'
                      : 'text-gray-100 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                  aria-label={`Select ${lang} language`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

  
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
           
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img 
                  className="h-16 w-auto" 
                  src='https://res.cloudinary.com/dondpcuxz/image/upload/v1755252898/logo-afsa_j8mygd.png' 
                  alt="AFSA logo"
                />
              </div>
              <div className="max-w-xs">
                <p className="text-gray-100 text-base font-normal font-satoshi leading-normal">
                  Harnessing Space Technology for Africa's Sustainable Development
                </p>
              </div>
            </div>

        
            <div className="flex flex-col items-end gap-2">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 px-4 py-2 bg-gray-50 border-0 rounded-l-md focus:outline-none focus:ring-none focus:bg-white transition-colors"
                  aria-label="Search website"
                />
                <button
                  type="submit"
                  className="bg-wine-100 hover:bg-wine-200 h-10 px-3 rounded-r-md border-0 flex items-center justify-center transition-colors focus:outline-none focus:ring-none"
                  aria-label="Submit search"
                >
                  <img
                    src={SearchIcon}
                    className="w-5 h-5"
                    alt=""
                  />
                </button>
              </form>
              
              <button type='button' className="text-gray-100 text-sm font-normal font-satoshi hover:text-gray-900 transition-colors">
                A to Z site Index
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header