import React from 'react';
import BionicVision from "../assets/bionic-vision.png";
import GroceryGenie from "../assets/grocery-genie.png";

const projects = [
  {
    title: 'HeraHealth',
    duration: 'MAR 2024 - MAY 2024',
    image: "#",
    description: 'An android app using image processing to accurately quantify and monitor postpartum blood loss, aiding in the early detection of postpartum hemorrhaging.',
    tech: ['Node.js', 'Kotlin','Python', 'Rest API', 'MongoDB Atlas'],
    link: '#',
  },
  {
    title: 'Diabetes Classification',
    duration: 'NOV 2024 - DEC 2024',
    image: '#',
    description: 'Machine learning model accurately classifies individuals at risk of diabetes to support early diagnosis and intervention.',
    tech: ['Python', 'Tensorflow', 'Pandas', 'Numpy'],
    link: 'https://github.com/nappilil/Diabetes-Classification-Algorithm',
  },
  {
    title: 'Musicboxd',
    duration: 'OCT 2024 - DEC 2024',
    image: '#',
    description: 'Music-based social media platform where users find friends, chat in real time, write reviews, posts and find music.',
    tech: ['Next.js', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'Mongoose', 'MongoDB', 'Spotify API', 'Docker', 'AWS'],
    link: 'https://github.com/nappilil/musicboxd',
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <div key={index} className="w-full p-4 border shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
          <img src={project.image} alt={project.title} style={{ width: '500px', height: '200px', objectFit: 'cover' }} />
          <p className="text-base mb-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {project.tech.map((tech) => (
              <div className="group text-center p-1 border rounded-md transition duration-300 hover:bg-blue-500 hover:text-white">
                <p className="text-xs text-gray-600 group-hover:text-white">{tech}</p>
              </div>
            ))}
          </div>
          <a href={project.link} target="_blank" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 text-sm rounded-md transition duration-300 mt-4">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
