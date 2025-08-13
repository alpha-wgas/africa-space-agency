import { Search } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar with language selector */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-red-600 mr-2">🏠</span>
              Welcome to AFSA
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-gray-600 hover:text-gray-900">FRANÇAIS</button>
              <button className="text-gray-600 hover:text-gray-900">عربي</button>
              <button className="text-gray-600 hover:text-gray-900">PORTUGUÊS</button>
              <button className="text-gray-900 font-medium">ENGLISH</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and title */}
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AFSA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AFSA</h1>
                <p className="text-sm text-gray-600">Harnessing Space Technology for</p>
                <p className="text-sm text-gray-600">Africa's Sustainable Development</p>
              </div>
            </div>
          </div>

          {/* Search and A to Z */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-red-600 text-white rounded-r-md hover:bg-red-700">
                <Search className="w-4 h-4" />
              </button>
            </div>
            <button className="text-sm text-gray-600 hover:text-gray-900">
              A to Z site Index
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header