import { motion } from "framer-motion";

export const MainBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-16 space-y-6 px-4 sm:px-6 animate-fadeIn'>
      <h1 className='font-title font-extrabold text-center text-4xl sm:text-5xl md:text-6xl text-gray-800'>
        {Array.from("Hola, mi nombre es ").map((letter, index) => (
          <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
          >
        {letter}
          </motion.span>
        ))}
        <span className='bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent font-bold py-2 transition-colors duration-300 hover:from-blue-600 hover:to-sky-500'>
          {Array.from("Enzo Briones").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: (index + "Hola, mi nombre es ".length) * 0.05 }}
        >
          {letter}
        </motion.span>
          ))}
        </span>
      </h1>
      <motion.p 
        className='text-gray-700 font-semibold text-xl md:text-2xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: "Hola, mi nombre es Enzo Briones".length * 0.05 }}
      >
        {Array.from("Desarrollador Fullstack").map((letter, index) => (
          <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: (index + "Hola, mi nombre es Enzo Briones".length) * 0.05 + 0.3 }}
          >
        {letter}
          </motion.span>
        ))}
      </motion.p>
      <motion.p 
        className='text-gray-600 text-center max-w-xl text-lg leading-relaxed'
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: (Array.from("Hola, mi nombre es Enzo BrionesDesarrollador Fullstack").length * 0.05) + 0.5 
        }}
      >
        Diseño y desarrollo aplicaciones web modernas con enfoque en
        experiencias de usuario excepcionales
      </motion.p>
      <div className='flex items-center space-x-8 my-4'>
        <div className='relative group'>
          <img
            src='src/assets/images/react.svg'
            alt='react-logo'
            width={70}
            className='hover:scale-110 transition-transform'
          />
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg'>
            React.js
          </div>
        </div>
        <div className='relative group'>
          <img
            src='src/assets/images/nest.svg'
            alt='nest-logo'
            width={70}
            className='hover:scale-110 transition-transform'
          />
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg'>
            NestJS
          </div>
        </div>
        <div className='relative group'>
          <img
            src='src/assets/images/tailwind.svg'
            alt='tailwind-logo'
            width={70}
            className='hover:scale-110 transition-transform'
          />
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg'>
            Tailwind CSS
          </div>
        </div>
        <div className='relative group'>
          <img
            src='src/assets/images/nodejs.svg'
            alt='nodejs-logo'
            width={70}
            className='hover:scale-110 transition-transform'
          />
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg'>
            Node.js
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10 w-full sm:w-auto'>
        <a
          target="_blank"
          href='https://www.github.com/enzobriones/'
          className='group w-full sm:w-auto flex items-center justify-center space-x-3 bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transform hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg'
        >
          <img
            src='src/assets/images/github.svg'
            alt='github-logo'
            width={22}
            className='group-hover:rotate-12 transition-transform'
          />
          <span className='font-medium'>GitHub</span>
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/enzobriones/'
          className='group w-full sm:w-auto flex items-center justify-center space-x-3 bg-sky-700 text-white px-8 py-3 rounded-lg hover:bg-sky-600 transform hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg'
        >
          <img
            src='src/assets/images/linkedin.svg'
            alt='linkedin-logo'
            width={22}
            className='group-hover:rotate-12 transition-transform'
          />
          <span className='font-medium'>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};
