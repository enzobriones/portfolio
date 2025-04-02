interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  techs: Tech[];
}

interface Tech {
  title: string;
  color: string;
}

export const ProjectCard = ({
  imageUrl,
  title,
  description,
  techs,
}: ProjectCardProps) => {
  return (
    <div className='bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200'>
      <div className='h-40 bg-gray-100 rounded-md mb-4 overflow-hidden'>
        <img
          src={imageUrl}
          alt={title}
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
        />
      </div>
      <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
      <p className='text-gray-600 mt-2'>{description}</p>
      <div className='flex mt-4 space-x-2'>
        {techs.map((tech) => (
          <span className={`px-2 py-1 bg-${tech.color}-100 text-${tech.color}-800 text-xs rounded-md`}>
            {tech.title}
          </span>
        ))}
      </div>
    </div>
  );
};
