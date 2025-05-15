import BionicVision from "../assets/bionic-vision.png";
import GroceryGenie from "../assets/grocery-genie.png";
import ExtendedSQL from "../assets/extended-sql.png";
import Musicboxd from "../assets/music.png";
import Diabetes from "../assets/diabetes2.png"
import HeraHealth from "../assets/herahealth.png"

const projects = [
  {
    title: 'HeraHealth',
    duration: 'OCT 2024 - MAY 2025',
    image: HeraHealth,
    description: 'Awarded Best Computer Science Senior Design Project: a medical imaging app that quantifies postpartum blood loss on maternal pads with 97% accuracy through AI image recongition model, aiding in the early detection of postpartum hemorrhaging.',
    tech: ['Node.js', 'Python', 'Rest API', 'Postman', 'MongoDB Atlas'],
    link: 'https://www.linkedin.com/company/herahealthinc/',
  },
  {
    title: 'Diabetes Classification',
    duration: 'NOV 2024 - DEC 2024',
    image: Diabetes,
    description: 'A machine learning model that accurately classifies individuals at risk of prediabetes and diabetes to support early diagnosis and intervention.',
    tech: ['Python', 'Tensorflow', 'Pandas', 'Numpy'],
    link: 'https://github.com/nappilil/Diabetes-Classification-Algorithm',
  },
  {
    title: 'Musicboxd',
    duration: 'OCT 2024 - DEC 2024',
    image: Musicboxd,
    description: 'Music-based social media platform where users find friends, chat in real time, write reviews, posts and find music.',
    tech: ['Next.js', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'Mongoose', 'MongoDB', 'Spotify API', 'Docker', 'AWS'],
    link: 'https://github.com/nappilil/musicboxd',
  },
  {
    title: 'Extended SQL Compiler',
    duration: 'OCT 2024 - DEC 2024',
    image: ExtendedSQL,
    description: 'This compiler extends the SQL syntax allowing users to be able to write multiple aggregate queries more accurately and succinctly.',
    tech: ['Python', 'SQL', 'PostgreSQL'],
    link: 'https://github.com/nappilil/CS562-Final-Project',
  },
  
  {
    title: 'Grocery Genie',
    duration: 'MAR 2024 - MAY 2024',
    image: GroceryGenie,
    description: 'A web application to make grocery shopping among roommates and families easier through shared grocery lists.',
    tech: ['Node.js', 'Handlebars', 'CSS', 'MongoDB'],
    link: 'https://github.com/nappilil/CS546-Final-Project',
  },
  {
    title: 'Bionic Vision',
    duration: 'NOV 2023 - DEC 2023',
    image: BionicVision,
    description: 'A Google Chrome browser extension that enhances reading experiences for neurodivergent users with bionic reading.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/nappilil/Bionic-Vision',
  },
];

const Project = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {projects.map((project, index) => (
        <div key={index} className="w-full p-4 focus:border">
          <div className="flex justify-center items-center">
            <img src={project.image} alt={project.title}
              className="w-[500px] h-[245px] mb-3 object-cover shadow-lg border-solid rounded-lg"
            />
          </div>
          <h2 className="text-xl font-bold mb-1">{project.title}</h2>
          <p className="text-sm text-gray-400 mb-3">{project.duration}</p>
          <p className="text-base mb-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {project.tech.map((tech, index) => (
              <div key={index} 
              className="group text-center p-1 border rounded-md 
              hover:bg-blue-500
              dark:hover:bg-purple-600">
                <p className="text-xs focus:text-gray-700 dark:text-gray-300 group-hover:text-white">{tech}</p>
              </div>
            ))}
          </div>
          <a href={project.link} target="_blank" className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold py-2 px-4 text-sm rounded-md mt-4">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
