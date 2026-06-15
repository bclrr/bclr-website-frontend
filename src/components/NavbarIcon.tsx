import logo from '../assets/octania-logo.png';

export function NavbarIcon({bgColor = "bg-white", className = ""} : {
  bgColor?: string,
  className?: string
}) {

  return (
    <div className={`flex items-center gap-2 h-14 ${bgColor} ${className}`}>
      <img src={logo} className="h-12 w-12 rounded-full"></img>
      <span className='text-lg font-semibold text-gray-900'>Octania Wiki</span>
    </div>
  )
}