export const AboutMe = () => {
  return (
    <div>
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
            escalables y eficientes. Con experiencia en React y NestJS, disfruto
            transformando ideas complejas en interfaces intuitivas y APIs
            robustas.
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
    </div>
  );
};
