import { NavbarIcon } from './NavbarIcon';

export function Navbar() {

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-20 border-b border-gray-200 bg-white pl-2">
      <nav className="max-w-[1440px] mx-auto h-full flex justify-between items-center ml-4 mr-4">

        <NavbarIcon className="w-[calc(var(--content-offset)+16rem)] ml-[calc(var(--content-offset)*-1)] pl-[var(--content-offset)]"/>

        <div className="div flex items-center gap-4">
          <div className="flex items-center gap-2">
            <p>test 5</p>
            <p>test 6</p>
          </div>
          <div>
            <p>test 3</p>
            <p>test 4</p>
          </div>
        </div>
      </nav>
    </header>
  )
}