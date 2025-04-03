import { ProjectCard } from "./ProjectCard";

export const FeaturedProjects = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
        Proyectos Destacados
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Project Card 1 */}
        <ProjectCard
          imageUrl='src/assets/images/taxa.png'
          title='Landing Page TAXA'
          description='Página estática desarrollada con Vue.js, TailwindCSS y TypeScript'
          techs={[
            { title: 'Vue', color: 'green' },
            { title: 'TypeScript', color: 'blue' },
          ]}
        />
        {/* Project Card 2 */}
        <ProjectCard
          imageUrl='src/assets/images/nahuelbuta.png'
          title='Landing Page Centro Médico Nahuelbuta'
          description='Página estática desarrollada con React, TailwindCSS y TypeScript'
          techs={[
            { title: 'React', color: 'blue' },
            { title: 'TypeScript', color: 'blue' },
          ]}
        />
      </div>
      <div className="mt-10 text-center">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/enzobriones"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <span>Ver mi perfil de Github</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      <div className="mt-8 text-gray-600 text-sm">
        <p>Destacados por relevancia y complejidad técnica. Todos los proyectos incluyen despliegue en producción y código disponible para revisión.</p>
      </div>
    </div>
  );
};
