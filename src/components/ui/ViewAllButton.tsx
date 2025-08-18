import { ArrowRight } from 'lucide-react'

interface ViewAllButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}

const ViewAllButton = ({ 
  text = "View all", 
  onClick, 
  className = "" 
}: ViewAllButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`inline-flex items-center text-base font-medium font-satoshi text-forestGreen-100 hover:bg-gray-50 px-4 py-2.5 transition-all duration-300 group rounded ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
    </button>
  )
}

export default ViewAllButton