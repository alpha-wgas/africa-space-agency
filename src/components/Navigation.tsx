import { ChevronDown } from 'lucide-react'

const Navigation = () => {
  const navItems = [
    { title: 'HOME', href: '/' },
    { title: 'ABOUT US', href: '/about', hasDropdown: true },
    { title: 'PROGRAMMES & INITIATIVES', href: '/programmes', hasDropdown: true },
    { title: 'OPPORTUNITIES', href: '/opportunities', hasDropdown: true },
    { title: 'MEDIA', href: '/media', hasDropdown: true },
    { title: 'EVENTS', href: '/events' },
    { title: 'RESOURCES', href: '/resources' },
  ]

  return (
    <nav className="bg-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center px-3 py-4 text-white font-medium hover:bg-red-600 transition-colors duration-200"
                >
                  {item.title}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation