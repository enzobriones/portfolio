export const MainBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-5 space-y-2 px-4 sm:px-6'>
      <h1 className='font-title font-extrabold text-center text-3xl sm:text-4xl text-gray-800'>
        Hola, mi nombre es{' '}
        <span className='text-sky-500 font-bold py-2 transition-colors hover:font-extrabold relative after:absolute after:w-full after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'>
          Enzo Briones
        </span>
      </h1>
      <p className='text-gray-700 font-semibold'>Soy desarrollador fullstack</p>
      <p className='text-gray-500 text-center max-w-md'>
        Diseño y desarrollo aplicaciones web utilizando React y NestJS
      </p>
      <div className='flex items-center space-x-4'>
        <img src='src/assets/images/react.svg' alt='react-logo' width={60} />
        <img src='src/assets/images/nest.svg' alt='react-logo' width={60} />
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
    </div>
  );
}
