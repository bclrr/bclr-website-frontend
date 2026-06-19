import { NavbarIcon } from './NavbarIcon';
import searchIcon from '../assets/search-icon.svg';

export function Navbar() {

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-20 border-b border-gray-200 bg-white pl-2">
      <nav className="max-w-[1440px] w-full h-full flex justify-between items-center px-4 ml-[var(--content-offset)]">
        <NavbarIcon className="w-auto"/>
      
        <div className="flex items-center gap-4 justify-between flex-1 ml-12 lg:ml-24">
          <button className='border-soft rounded-lg border text-info bg-soft py-2 px-3 text-sm flex items-center gap-2'>
            <img src={searchIcon} alt="search icon" className='h-4 w-4 text-info'/>
            Rechercher
          </button>
      
          <div>
            <p>test 3</p>
            <p>test 4</p>
          </div>
        </div>
      </nav>
    </header>
  )
}