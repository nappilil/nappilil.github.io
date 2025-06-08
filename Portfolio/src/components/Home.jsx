import { useState } from 'react';
import { Link } from 'react-router-dom';
import StevensLogo from "../assets/stevens-institute-of-technology-logo.png"
import BDXLogo from "../assets/BDX.png"
import CodeNinjaLogo from "../assets/code-ninja.png"
import { LiaFileDownloadSolid } from "react-icons/lia";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import './App.css';

const role = import.meta.env.VITE_ROLE;

function Home() {
  const [activeTab, setActiveTab] = useState('work');

  const experience = [
    {
      company: "BD (Becton Dickinson)",
      title: "AI Operational Analyst",
      duration: "Jun 2025 - Present",
      location: "Franklin Lakes, NJ",
      logo: BDXLogo,
      website: 'https://www.bd.com/en-us'
    },
    {
      title: "Application Development Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "Franklin Lakes, NJ",
      achievments: [
        "Spearheaded GenAI Chatbot, automating 80% of end-user’s inquiries during hypercase",
        "Developed app to automate purchase order requests for hundreds of vendors across BDI business segment",
        "Identified JDE password reset automation saving $20k in development with cross-functional team collaboration",
        "Led requirement sessions with global stakeholders for ERP project saving $450k annually"
      ],
    },
    {
      company: "Code Ninjas",
      title: "Curriculum Developer",
      duration: "Sep 2024 - Jun 2025",
      location: "Remote",
      description: "The largest children&apos;s coding franchise, uses my curriculum across 400+ locations, reaching over 100,000 students.",
      achievments: [
        "Developed Interactive Godot Tour plugin adapted by GDQuest for beginners to explore Godot’s Interface",
        "Created AI Acadmies and Godot curriculum content, constistenly meeting weekly sprint deadlines",
        "Developed 5-day cybersecurity camp teaching importance of privacy, strong passwords, MFA, malware, identifying phishing scams, cryptography methods, and cybersecurity careers",
        "Performed QA testing, piloting programs, and training development"
      ],
      logo: CodeNinjaLogo,
      website: 'https://www.codeninjas.com/'
    },
    {
      title: "Assistant Site Director",
      duration: "Jan 2024 - Nov 2024",
      location: "Midland Park, NJ",
      achievments: [
        "Managed 20+ camp curriculums, supervised 15+ staff members, and oversaw daily operations",
        "Developed monthly coding challenges for students, improving customer engagement and retention",
        "Boosted sign-up rates by launching YouTube Channel showcasing students’ accomplishments",
      ],
    },
    {
      title: "Code Sensei",
      duration: "Sep 2023 - Nov 2024",
      location: "Midland Park, NJ",
      achievments: [
        "Designed top-selling curriculum for Girl Scouts to earn coding badge, leading to partnership with Girl Scouts of Northern NJ",
        "Recognized as Employee of the Month for two consecutive months within the first few months of employment",
        "Led 15+ camps teaching AI/ML, coding mods in Minecraft Java Edition and developing Roblox games in Lua",
        "Instructed children in JavaScript and C#, teaching object-oriented programming, and game development",
        "Debugged code, graded projects and provided constant communication to parents on student’s progress"
      ],
    }

  ]

  const renderContent = () => {
    if (activeTab === 'work') {
      return (
        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="pl-10 space-y-8">
            <div className="space-y-5 text-left">
              {experience.map((experience, index) => (
                <div key={index} className="relative">
                  {experience.logo !== undefined && <div className="absolute -left-12 top-0">
                    <a href={experience.website} target="_blank">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-8 h-8 rounded-full"
                      />
                    </a>
                  </div>}
                  {experience.company !== undefined && <h4 className="text-lg font-bold">{experience.company}</h4>}
                  {experience.title !== undefined && <h5 className="text-md font-semibold">{experience.title}</h5>}
                  <time className="text-sm text-gray-400">{experience.duration}</time>
                  {/*<p className="text-sm focus:text-gray-600 dark:text-gray-400">{experience.location}</p>*/}
                  {experience.description !== undefined && <p className="mt-1">{experience.description}</p>}
                  {experience.achievments !== undefined && <ul className="list-disc ml-6 mt-1">
                    {experience.achievments.map((achievment) => (
                      <li>{achievment}</li>
                    ))}
                  </ul>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    } else if (activeTab === 'education') {
      return (
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <a href="https://www.stevens.edu/">
              <img
                src={StevensLogo}
                alt="Stevens Institute of Technology"
                className="w-8 h-8"
              />
            </a>
            <h4 className="text-lg font-bold">Stevens Institute of Technology</h4>
          </div>
          <p>Bachelor of Science - Computer Science</p>
          <p>Minor - Science, Technology & Society</p>
          <p className="text-sm focus:text-gray-600 dark:text-gray-400">Aug 2021 - May 2025</p>
          <ul className="list-disc ml-6 pt-1">
            <li>Awarded Best Computer Science Senior Design Project</li>
            <li>Placed 3rd in Ansary Entrepreneurship Competition</li>
            <li>Multiple Dean List Recipient</li>
            <li>Presidential Scholarship Recipient</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="https://www.stevens.edu/news/capstone-excellence-showcased-stevens-2025-innovation-expo-brings-student"
              className="inline-block dark:bg-purple-500 dark:hover:bg-purple-600 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded-md">Final Capstone Project
            </a>
            <a
              href="https://github.com/nappilil/School-Projects"
              className="inline-block dark:bg-purple-500 dark:hover:bg-purple-600 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded-md">Coursework
            </a>
          </div>
        </div >
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10">
      <div className="max-w-lg focus:border w-full rounded-lg p-6 text-center">
        <img
          src="https://avatars.githubusercontent.com/u/116825146?v=4"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 dark:border-purple-500 object-cover"
        />

        <h2 className="text-3xl font-bold mb-2">Hi, I&apos;m Lilli!</h2>
        <p className="mb-2">{role}</p>
        <div className="flex space-x-6 mb-3 justify-center items-center">
          <Link
            to="/resume"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
          >
            <LiaFileDownloadSolid className="w-6 h-6" />
          </Link>

          <a
            href="https://www.linkedin.com/in/lilli-nappi-727402262/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/nappilil"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="w-6 h-6" />
          </a>

          <a
            href='/#/contact'
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
          >
            <AiOutlineMail className="w-6 h-6" />
          </a>
        </div>

        <div className="border-b border-gray-200 mb-4">
          <button
            className={`py-2 px-4 ${activeTab === 'work'
              ? 'border-b-2 text-blue-500 border-blue-500 dark:text-purple-500 dark:border-purple-500'
              : 'focus:text-blue-600 focus:text-blue-300 hover:text-blue-500 hover:border-blue-500 dark:hover:text-purple-500'
              }`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'education'
              ? 'border-b-2 text-blue-500 border-blue-500 dark:text-purple-500 dark:border-purple-500'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500 dark:hover:text-purple-500 dark:hover:border-purple-500'
              }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        <div className="text-left">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Home;
