import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className='flex flex-col items-center p-4 mb-10 bg-blue-50'>
      {/* Dropdown Menu */}
      <div>
        <div className="sm:hidden">
          <button 
            onClick={toggleMenu} 
            className="flex items-center p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <Menu />
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-2 px-4">
              {['Inicio', 'Sobre mí', 'Mis proyectos', 'Contacto'].map((item, index) => (
                <Link
                  key={index}
                  to="/"
                  className="block py-2 text-slate-600 hover:text-slate-900 border-b border-gray-100 last:border-0"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Desktop View */}
      <div className='max-sm:hidden flex w-full items-center justify-between my-4'>
        <img src='src/assets/images/dev-icon.svg' alt='react-logo' width={40} />
        <div className='flex items-center space-x-6'>
          {['Inicio', 'Sobre mí', 'Mis proyectos', 'Contacto'].map(
            (item, index) => (
              <Link
                key={index}
                to='/'
                className='text-slate-600 relative py-2 font-medium transition-colors hover:text-slate-900 after:absolute after:w-full after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};
