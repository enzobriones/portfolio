import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inicio',
        'sobre-mi',
        'habilidades',
        'proyectos',
        'contacto',
      ];
      
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => section === activeSection;

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false); // Close menu after click on mobile
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav className='sticky top-0 z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-sm shadow-sm rounded-b-lg'>
      {/* Mobile hamburger and logo */}
      <div className="flex justify-between items-center md:hidden">
        <span className="font-bold text-indigo-600">Enzo Briones</span>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className='flex flex-col space-y-4 mt-4 md:hidden'>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block font-medium transition-colors ${
                  isActive(id)
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-800 hover:text-indigo-600'
                }`}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop menu */}
      <ul className='hidden md:flex space-x-8 justify-center'>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`font-medium transition-colors ${
                isActive(id)
                  ? 'text-indigo-600 font-semibold'
                  : 'text-gray-800 hover:text-indigo-600'
              }`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
