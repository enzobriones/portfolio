export const SkillsGrid = () => {
  return (
    <div className='mt-12'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
        Habilidades
      </h2>
      <p className='text-gray-600 mb-6 leading-relaxed'>
        Estas son algunas de las tecnologías y herramientas con las que trabajo
        habitualmente.
      </p>
      <div className='relative mb-8'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-200'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-4 text-sm text-gray-500'>
            Tecnologías principales
          </span>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {[
          { name: 'React', percentage: 80 },
          { name: 'TypeScript', percentage: 80 },
          { name: 'Vue.js', percentage: 60 },
          { name: 'NestJS', percentage: 75 },
          { name: 'Node.js', percentage: 75 },
          { name: 'Express', percentage: 70 },
          { name: 'MongoDB', percentage: 60 },
          { name: 'PostgreSQL', percentage: 70 },
          { name: 'Git', percentage: 75 },
          { name: 'Docker', percentage: 60 },
          { name: 'Python', percentage: 70 },
          { name: 'Java', percentage: 60 },
        ].map((skill) => (
          <div
        key={skill.name}
        className='bg-gradient-to-r from-slate-50 to-slate-100 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-gray-200 relative group'
          >
        <p className='font-semibold text-gray-800 text-sm sm:text-base'>
          {skill.name}
        </p>
        
        {/* Tooltip que aparece al hacer hover */}
        <div className='absolute left-0 -top-16 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10'>
          <div className='bg-white rounded-md shadow-lg p-3 mx-auto w-[95%] border border-gray-200'>
            <p className='text-xs mb-1 font-medium text-gray-700'>Nivel: {skill.percentage}%</p>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
          <div 
            className='bg-blue-600 h-2.5 rounded-full' 
            style={{ width: `${skill.percentage}%` }}
          ></div>
            </div>
          </div>
          {/* Flecha del tooltip */}
          <div className='w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45 mx-auto -mt-1.5'></div>
        </div>
          </div>
        ))}
      </div>
      {/* Herramientas y frameworks */}
      <div className='relative my-8'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-200'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-4 text-sm text-gray-500'>
            Herramientas y frameworks
          </span>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8'>
        {[
          { name: 'Tailwind CSS', percentage: 85 },
          { name: 'Zustand', percentage: 75 },
          { name: 'Django', percentage: 70 },
          { name: 'AWS', percentage: 60 },
        ].map((skill) => (
          <div
            key={skill.name}
            className='bg-gradient-to-r from-slate-50 to-slate-100 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-gray-200 relative group'
          >
            <p className='font-semibold text-gray-800 text-sm sm:text-base'>
              {skill.name}
            </p>
            
            <div className='absolute left-0 -top-16 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10'>
              <div className='bg-white rounded-md shadow-lg p-3 mx-auto w-[95%] border border-gray-200'>
                <p className='text-xs mb-1 font-medium text-gray-700'>Nivel: {skill.percentage}%</p>
                <div className='w-full bg-gray-200 rounded-full h-2.5'>
                  <div 
                    className='bg-green-600 h-2.5 rounded-full' 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className='w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45 mx-auto -mt-1.5'></div>
            </div>
          </div>
        ))}
      </div>

      {/* Habilidades adicionales */}
      <div className='relative my-8'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-200'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-4 text-sm text-gray-500'>
            Otras habilidades
          </span>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {[
          { name: 'Linux', percentage: 70 },
          { name: 'Inglés C1', percentage: 90 },
          { name: 'Scrum', percentage: 80 },
          { name: 'REST API', percentage: 85 },
        ].map((skill) => (
          <div
            key={skill.name}
            className='bg-gradient-to-r from-slate-50 to-slate-100 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-gray-200 relative group'
          >
            <p className='font-semibold text-gray-800 text-sm sm:text-base'>
              {skill.name}
            </p>
            
            <div className='absolute left-0 -top-16 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10'>
              <div className='bg-white rounded-md shadow-lg p-3 mx-auto w-[95%] border border-gray-200'>
                <p className='text-xs mb-1 font-medium text-gray-700'>Nivel: {skill.percentage}%</p>
                <div className='w-full bg-gray-200 rounded-full h-2.5'>
                  <div 
                    className='bg-purple-600 h-2.5 rounded-full' 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className='w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45 mx-auto -mt-1.5'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
