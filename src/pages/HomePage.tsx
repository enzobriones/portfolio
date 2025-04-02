export default function HomePage() {
  return (
    <div className='w-full items-center justify-center mb-5'>
      <section>
        <div className='flex flex-col items-center justify-center w-full mt-5 space-y-2 px-4 sm:px-6'>
          <h1 className='font-title font-extrabold text-center text-3xl sm:text-4xl text-gray-800'>
            Hola, mi nombre es{' '}
            <span className='text-sky-500 font-bold py-2 transition-colors hover:font-extrabold relative after:absolute after:w-full after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'>
              Enzo Briones
            </span>
          </h1>
          <p className='text-gray-700 font-semibold'>
            Soy desarrollador fullstack
          </p>
          <p className='text-gray-500 text-center max-w-md'>
            Diseño y desarrollo aplicaciones web utilizando React y NestJS
          </p>
          <div className='flex items-center space-x-4'>
            <img
              src='src/assets/images/react.svg'
              alt='react-logo'
              width={60}
            />
            <img src='src/assets/images/nest.svg' alt='react-logo' width={60} />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5 mt-10 max-sm:px-4'>
          <button className='w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-700 text-white px-8 py-2 rounded-lg hover:bg-slate-600 hover:scale-105 cursor-pointer transition-all duration-400'>
            <img
              src='src/assets/images/github.svg'
              alt='github-logo'
              width={20}
            />
            <span>Github</span>
          </button>
          <button className='w-full sm:w-auto flex items-center justify-center space-x-2 bg-sky-700 text-white px-8 py-2 rounded-lg hover:bg-sky-600 hover:scale-105 cursor-pointer transition-all duration-400'>
            <img
              src='src/assets/images/linkedin.svg'
              alt='linkedin-logo'
              width={20}
            />
            <span>LinkedIn</span>
          </button>
        </div>
      </section>
      <section className='mt-16 w-full max-w-4xl mx-auto px-4 sm:px-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
          Sobre Mí
        </h2>

        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='w-full md:w-1/3'>
            <div className='rounded-full overflow-hidden h-32 w-32 sm:h-48 sm:w-48 mx-auto border-4 border-sky-100 shadow-lg'>
              <img
                src='src/assets/images/profile.jpg'
                alt='Enzo Briones'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          <div className='w-full md:w-2/3'>
            <p className='text-gray-700 mb-4'>
              Soy un desarrollador fullstack apasionado por crear soluciones web
              escalables y eficientes. Con experiencia en React y NestJS,
              disfruto transformando ideas complejas en interfaces intuitivas y
              APIs robustas.
            </p>
            <p className='text-gray-700 mb-4'>
              Mi enfoque se centra en escribir código limpio y mantenible,
              utilizando las mejores prácticas y patrones de diseño. Me encanta
              aprender nuevas tecnologías y enfrentar desafíos que me permitan
              crecer profesionalmente.
            </p>
            <div className='flex flex-wrap gap-2 mt-5'>
              <span className='px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium'>
                Desarrollo Web
              </span>
              <span className='px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium'>
                Frontend
              </span>
              <span className='px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium'>
                Backend
              </span>
              <span className='px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium'>
                Diseño de APIs
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-16 w-full max-w-4xl mx-auto px-4 sm:px-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
          Proyectos Destacados
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Project Card 1 */}
          <div className='bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200'>
            <div className='h-40 bg-gray-100 rounded-md mb-4 overflow-hidden'>
              <img
                src='src/assets/images/taxa.png'
                alt='Project 1'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
              />
            </div>
            <h3 className='text-xl font-bold text-gray-800'>
              Landing Page TAXA
            </h3>
            <p className='text-gray-600 mt-2'>
              Página estática realizada con Vue.js, TailwindCSS y desplegada en
              Hostgator
            </p>
            <div className='flex mt-4 space-x-2'>
              <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md'>
                Vue
              </span>
              <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md'>
                TypeScript
              </span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className='bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200'>
            <div className='h-40 bg-gray-100 rounded-md mb-4 overflow-hidden'>
              <img
                src='src/assets/images/nahuelbuta.png'
                alt='Project 2'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
              />
            </div>
            <h3 className='text-xl font-bold text-gray-800'>
              Landing Page Centro Médico Nahuelbuta
            </h3>
            <p className='text-gray-600 mt-2'>
              Página estática realizada con React y TailwindCSS
            </p>
            <div className='flex mt-4 space-x-2'>
              <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md'>
                React
              </span>
              <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md'>
                TypeScript
              </span>
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
            Habilidades
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {[
              'React',
              'TypeScript',
              'Vue.js',
              'NestJS',
              'Node.js',
              'Express',
              'MongoDB',
              'PostgreSQL',
            ].map((skill) => (
              <div
                key={skill}
                className='bg-gradient-to-r from-slate-50 to-slate-100 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-gray-200'
              >
                <p className='font-semibold text-gray-800 text-sm sm:text-base'>
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12 bg-gradient-to-r from-sky-50 to-indigo-50 p-4 sm:p-6 rounded-xl shadow-sm'>
          <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4'>
            ¿Listo para trabajar juntos?
          </h2>
          <p className='text-gray-700 mb-6'>
            Estoy disponible para proyectos freelance y oportunidades laborales.
          </p>
        </div>
      </section>
    </div>
  );
}
