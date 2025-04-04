export const AboutMe = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
        Sobre Mí
      </h2>
      <div className='flex flex-col md:flex-row gap-8 items-center'>

        <div className='w-full'>
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
      <div className='mt-10 bg-gradient-to-r from-sky-50 to-white p-6 rounded-lg shadow-md'>
        <h3 className='text-xl font-semibold text-gray-800 mb-4'>
          ¿Por qué trabajar conmigo?
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='text-sky-500 text-2xl mb-2'>
              <i className='fas fa-rocket'></i>
            </div>
            <h4 className='font-medium text-gray-800 mb-1'>
              Innovación Constante
            </h4>
            <p className='text-gray-600 text-sm'>
              Siempre buscando soluciones creativas a problemas complejos.
            </p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='text-sky-500 text-2xl mb-2'>
              <i className='fas fa-code'></i>
            </div>
            <h4 className='font-medium text-gray-800 mb-1'>
              Código de Calidad
            </h4>
            <p className='text-gray-600 text-sm'>
              Desarrollo limpio, mantenible y bien documentado.
            </p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='text-sky-500 text-2xl mb-2'>
              <i className='fas fa-users'></i>
            </div>
            <h4 className='font-medium text-gray-800 mb-1'>
              Colaboración Efectiva
            </h4>
            <p className='text-gray-600 text-sm'>
              Comunicación clara y trabajo en equipo para alcanzar objetivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
