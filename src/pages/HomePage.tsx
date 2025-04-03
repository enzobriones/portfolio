import { motion } from 'framer-motion';
import { AboutMe } from '../components/home/AboutMe';
import { Contact } from '../components/home/Contact';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { MainBanner } from '../components/home/MainBanner';
import { SkillsGrid } from '../components/home/SkillsGrid';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { Separator } from '../components/ui/Separator';

export default function HomePage() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className='w-full items-center justify-center mb-5'>
      <Navbar />
      <motion.section 
        id='inicio' 
        className='pt-24'
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <MainBanner />
      </motion.section>
      <Separator />
      <motion.section 
        id='sobre-mi' 
        className='pt-16 w-full max-w-4xl mx-auto px-4 sm:px-6'
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutMe />
      </motion.section>
      <Separator />
      <motion.section 
        id='habilidades' 
        className='pt-16 w-full max-w-4xl mx-auto px-4 sm:px-6'
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <SkillsGrid />
      </motion.section>
      <Separator />
      <motion.section 
        id='proyectos' 
        className='pt-32 w-full max-w-4xl mx-auto px-4 sm:px-6'
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <FeaturedProjects />
      </motion.section>
      <Separator />
      <motion.section 
        id='contacto' 
        className='pt-16 flex w-full items-center justify-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>
      <Footer />
    </div>
  );
}
