export const SkillsGrid = () => {
  return (
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
  );
}
