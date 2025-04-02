import { AboutMe } from "../components/home/AboutMe";
import { MainBanner } from "../components/home/MainBanner";
import { ProjectCard } from "../components/home/ProjectCard";
import { SkillsGrid } from "../components/home/SkillsGrid";

export default function HomePage() {
  return (
    <div className='w-full items-center justify-center mb-5'>
      <section>
        <MainBanner />
      </section>
      <section className='mt-16 w-full max-w-4xl mx-auto px-4 sm:px-6'>
        <AboutMe />
      </section>
      <section className='mt-16 w-full max-w-4xl mx-auto px-4 sm:px-6'>
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
        <SkillsGrid />

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
