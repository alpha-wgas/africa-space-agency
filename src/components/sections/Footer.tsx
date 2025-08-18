import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a
    href={href}
    className="text-gray-700 hover:text-gray-900 text-sm font-satoshi transition-colors duration-200"
  >
    {children}
  </a>
)

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="p-2 text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-200"
    aria-label={label}
  >
    {icon}
  </a>
)

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const aboutUsLinks = [
    { title: "Who we are", href: "/about" },
    { title: "Our History", href: "/history" },
    { title: "Leadership", href: "/leadership" },
    { title: "Legal Foundation", href: "/legal" },
    { title: "Members Countries", href: "/members" }
  ]

  const opportunitiesLinks = [
    { title: "Procurement", href: "/procurement" },
    { title: "Career", href: "/careers" }
  ]

  const programmesLinks = [
    { title: "Earth Observation", href: "/earth-observation" },
    { title: "Satellite Connectivity", href: "/satellite-connectivity" },
    { title: "Astronomy", href: "/astronomy" },
    { title: "Navigation & Positioning", href: "/navigation" }
  ]

  const socialLinks = [
    {
      href: "https://facebook.com/africanspaceagency",
      icon: <Facebook className="h-5 w-5" />,
      label: "Follow us on Facebook"
    },
    {
      href: "https://twitter.com/africanspaceagency", 
      icon: <Twitter className="h-5 w-5" />,
      label: "Follow us on Twitter"
    },
    {
      href: "https://linkedin.com/company/africanspaceagency",
      icon: <Linkedin className="h-5 w-5" />,
      label: "Connect with us on LinkedIn"
    },
    {
      href: "https://instagram.com/africanspaceagency",
      icon: <Instagram className="h-5 w-5" />,
      label: "Follow us on Instagram"
    }
  ]

  return (
    <footer className={`bg-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-sm font-medium font-satoshi uppercase tracking-wide text-gray-600 mb-6">
              ABOUT US
            </h3>
            <nav className="space-y-4">
              {aboutUsLinks.map((link, index) => (
                <div key={index}>
                  <FooterLink href={link.href}>
                    {link.title}
                  </FooterLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-sm font-medium font-satoshi uppercase tracking-wide text-gray-600 mb-6">
              OPPORTUNITIES
            </h3>
            <nav className="space-y-4">
              {opportunitiesLinks.map((link, index) => (
                <div key={index}>
                  <FooterLink href={link.href}>
                    {link.title}
                  </FooterLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-sm font-medium font-satoshi uppercase tracking-wide text-gray-600 mb-6">
              PROGRAMMES
            </h3>
            <nav className="space-y-4">
              {programmesLinks.map((link, index) => (
                <div key={index}>
                  <FooterLink href={link.href}>
                    {link.title}
                  </FooterLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src='https://res.cloudinary.com/dondpcuxz/image/upload/v1755252898/logo-afsa_j8mygd.png'
                alt="AFSA Logo"
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-700 text-sm font-satoshi leading-relaxed mb-6">
              The African Space Agency is the primary point of contact for Africa's cooperation with Europe and other international partners.
            </p>
            <div className="text-gray-700 text-sm font-satoshi space-y-2">
              <p>Egypt Space City, New Cairo</p>
              <p>Governorate, Egypt</p>
              <p className="mt-4">
                <a 
                  href="mailto:info@africanspaceagency.org"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  info@africanspaceagency.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Animated Banner */}
        <div className="bg-forestGreen-100 overflow-hidden mb-8 rounded">
          <div className="animate-marquee whitespace-nowrap py-3">
            <span className="text-sm font-medium font-satoshi text-white mx-8">
               Unifying Africa's Space Ambitions • Unifying Africa's Space Ambitions • 
              Unifying Africa's Space Ambitions • Unifying Africa's Space Ambitions • 
              Unifying Africa's Space Ambitions • Unifying Africa's Space Ambitions
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-wine-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-white text-sm font-satoshi">
              {currentYear} all right reserved
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer