export const Contact = () => {
  return (
    <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Contacto</h2>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Nombre
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Tu nombre'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='tu@email.com'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Mensaje
            </label>
            <textarea
              id='message'
              rows={4}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Tu mensaje...'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors'
          >
            Enviar mensaje
          </button>
        </form>
        <div className='mt-8 flex justify-center space-x-6'>
          <a href='#' className='text-gray-500 hover:text-indigo-600'>
            <span className='sr-only'>LinkedIn</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z' />
            </svg>
          </a>
          <a href='#' className='text-gray-500 hover:text-indigo-600'>
            <span className='sr-only'>GitHub</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
          </a>
          <a
            href='mailto:contacto@ejemplo.com'
            className='text-gray-500 hover:text-indigo-600'
          >
            <span className='sr-only'>Email</span>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">¿Por qué contactarme?</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-2">
              <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-medium">Respuesta Rápida</h4>
            <p className="text-gray-600 text-sm mt-1">Respondo a todas las consultas en menos de 24 horas.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-2">
              <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h4 className="font-medium">Colaboración</h4>
            <p className="text-gray-600 text-sm mt-1">Siempre abierto a nuevas oportunidades de colaboración.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-2">
              <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-medium">Soluciones Creativas</h4>
            <p className="text-gray-600 text-sm mt-1">Aporto ideas innovadoras a cada proyecto.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
