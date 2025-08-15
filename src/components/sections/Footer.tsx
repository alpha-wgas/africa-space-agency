import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { AFSALogo } from '../../assets'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white text-sm font-satoshi transition-colors duration-200"
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
    className="p-2 text-gray-400 hover:text-white hover:bg-wine-200 rounded-lg transition-all duration-200"
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
    <footer className={`bg-wine-100 text-white ${className}`}>
      {/* Animated Banner */}
      <div className="bg-green-600 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2">
          <span className="text-sm font-medium font-satoshi text-white mx-8">
            🚀 Africa's Space Ambitions • Unifying Africa's Space Ambitions • 
            Unifying Africa's Space Ambitions • Unifying Africa's Space Ambitions • 
            Unifying Africa's Space Ambitions • Unifying Africa's Space Ambitions
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-sm font-bold font-satoshi uppercase tracking-wide text-gray-200 mb-4">
              ABOUT US
            </h3>
            <nav className="space-y-3">
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
            <h3 className="text-sm font-bold font-satoshi uppercase tracking-wide text-gray-200 mb-4">
              OPPORTUNITIES
            </h3>
            <nav className="space-y-3">
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
            <h3 className="text-sm font-bold font-satoshi uppercase tracking-wide text-gray-200 mb-4">
              PROGRAMMES
            </h3>
            <nav className="space-y-3">
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
            <div className="flex items-center mb-4">
              <img
                src={AFSALogo}
                alt="AFSA Logo"
                className="h-8 w-auto mr-3"
              />
              <span className="font-bold font-satoshi text-lg">AFSA</span>
            </div>
            <p className="text-gray-300 text-sm font-satoshi leading-relaxed mb-4">
              The African Space Agency is the primary point of contact for Africa's cooperation with Europe and other international partners.
            </p>
            <div className="text-gray-300 text-sm font-satoshi space-y-1">
              <p>Egypt Space City, New Cairo</p>
              <p>Governorate, Egypt</p>
              <p className="mt-3">
                <a 
                  href="mailto:info@africanspaceagency.org"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@africanspaceagency.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-wine-200/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-300 text-sm font-satoshi">
              {currentYear} All rights reserved
            </p>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
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