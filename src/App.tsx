import Header from './components/header'
import Navigation from './components/navigation'
import LandingPage from './components/landing-page'


function App() {
  return (
    <div className="min-h-screen">
      {/* Fixed header and navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white ">
        <Header />
        <Navigation />
      </div>
      
      {/* Main content with responsive top padding to account for fixed header */}
      <main className="pt-44 sm:pt-48 md:pt-52 lg:pt-56">
        <LandingPage />
      </main>
    </div>
  )
}

export default App
