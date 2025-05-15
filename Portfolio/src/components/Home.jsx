import { useState } from 'react';
import StevensLogo from "../assets/stevens-institute-of-technology-logo.png"
import BDXLogo from "../assets/BDX.png"
import CodeNinjaLogo from "../assets/code-ninja.png"
import Resume from "../assets/Lilli-Nappi-Resume-2025.pdf"
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import './App.css';

const role = import.meta.env.VITE_ROLE;

function Home() {
  const [activeTab, setActiveTab] = useState('work');

  const renderContent = () => {
    if (activeTab === 'work') {
      return (
        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="pl-10 space-y-8">
            <div className="space-y-5 text-left">
              {/* BD - Application Development Intern */}
              <div className="relative">
                <div className="absolute -left-12 top-0">
                  <img
                    src={BDXLogo}
                    alt="Becton Dickinson"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <h4 className="text-lg font-bold">Becton Dickinson (BD)</h4>
                <h5 className="text-md font-semibold">Application Development Intern</h5>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Jun 2024 - Aug 2024</p>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Franklin Lakes, NJ</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Spearheaded GenAI Chatbot, automating 80% of end-user’s inquiries during hypercase</li>
                  <li>Developed app to automate purchase order requests for hundreds of vendors across BDI business segment</li>
                  <li>Identified JDE password reset automation saving $20k in development with cross-functional team collaboration</li>
                  <li>Led requirement sessions with global stakeholders for ERP project saving $450k annually</li>
                </ul>
              </div>
              {/* Code Ninjas - Curriculum Developer */}
              <div className="relative">
                <div className="absolute -left-12 top-0">
                  <img
                    src={CodeNinjaLogo}
                    alt="Code Ninjas Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <h4 className="text-lg font-bold">Code Ninjas</h4>
                <h5 className="text-md font-semibold">Curriculum Developer</h5>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Sep 2024 - Present</p>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Contract · Remote</p>
                <p className="mt-1">
                  The largest children&apos;s coding franchise, uses my curriculum across 400+ locations, reaching over 100,000 students.
                </p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Developed 5-day cybersecurity camp teaching importance of privacy, strong passwords, MFA, malware, identifying phishing scams, cryptography methods, and cybersecurity careers </li>
                  <li>Performed QA tests, debugging, piloting, and training development</li>
                </ul>
              </div>

              {/* Code Ninjas - Assistant Site Director */}
              <div className="relative">
                <h5 className="text-md font-semibold">Assistant Site Director</h5>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Jan 2024 - Nov 2024</p>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Midland Park, NJ</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Managed 20+ camp curriculums, supervised 15+ staff members, and oversaw daily operations</li>
                  <li>Developed monthly coding challenges for students, improving customer engagement and retention</li>
                  <li>Boosted sign-up rates by launching YouTube Channel showcasing students’ accomplishments</li>
                </ul>
              </div>

              {/* Code Ninjas - Code Sensei */}
              <div className="relative">
                <h5 className="text-md font-semibold">Code Sensei</h5>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Sep 2023 - Nov 2024</p>
                <p className="text-sm focus:text-gray-600 dark:text-gray-400">Midland Park, NJ</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Designed top-selling curriculum for Girl Scouts to earn coding badge, leading to partnership with Girl Scouts of Northern NJ</li>
                  <li>Recognized as Employee of the Month for two consecutive months within the first few months of employment</li>
                  <li>Led 15+ camps teaching AI/ML, coding mods in Minecraft Java Edition and developing Roblox games in Lua</li>
                  <li>Instructed children in JavaScript and C#, teaching object-oriented programming, and game development</li>
                  <li>Debugged code, graded projects and provided constant communication to parents on student’s progress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'education') {
      return (
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <img
              src={StevensLogo}
              alt="Stevens Institute of Technology"
              className="w-8 h-8" 
            />
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
          {/* Button to Link to Projects */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="#"
              className="inline-block dark:bg-purple-500 dark:hover:bg-purple-600 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded-md">Final Year Project
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
        {/* Profile Picture */}
        <img
          src="https://avatars.githubusercontent.com/u/116825146?v=4"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 dark:border-purple-500 object-cover"
        />

        <h2 className="text-3xl font-bold mb-2">Hi, I&apos;m Lilli!</h2>
        <p className="mb-2">{role}</p>
        <div className="flex space-x-6 mb-3 justify-center items-center">
          {/* Resume Download */}
          <a
            href={Resume}
            download="Lilli_Nappi_Resume.pdf"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
          >
            <span className="hidden sm:inline">Resume</span>
            <FaFileAlt className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lilli-nappi-727402262/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nappilil"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          {/* Contact Email */}
          <a
            href='/#/contact'
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-500"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        {/* Tab List */}
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
