import React, { useState } from 'react';
import LinkedInLogo from "../assets/linkedin-original.svg"
import StevensLogo from "../assets/stevens-institute-of-technology-logo.png"
import BDXLogo from "../assets/BDX.png"
import CodeNinjaLogo from "../assets/code-ninja.png"
import Resume from "../assets/Lilli-Nappi-Resume-2025.pdf"
import ResumeIcon from "../assets/resume.svg"
import EmailIcon from "../assets/email.svg"
import './App.css';

function Home() {
  const [activeTab, setActiveTab] = useState('work');

  const renderContent = () => {
    if (activeTab === 'work') {
      return (
        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="pl-10 space-y-8">
            <div className="space-y-5 text-left">
              {/* BD - Application Development Analyst Intern */}
              <div className="relative">
                {/* Image Aligned with Title */}
                <div className="absolute -left-12 top-0">
                  <img
                    src={BDXLogo}
                    alt="Becton Dickinson"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <h4 className="text-lg font-bold">Becton Dickinson (BD)</h4>
                <h5 className="text-md font-semibold">Application Development Intern</h5>
                <p className="text-sm text-gray-600">Jun 2024 - Aug 2024</p>
                <p className="text-sm text-gray-600">Franklin Lakes, NJ</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Built GenAI Chatbot prototype to automate 80% of end-users inquiries during hypercare</li>
                  <li>Developed app to automate the purchase order requests across BDI business segment</li>
                  <li>Revived initiative for automating JDE password resets, improving ROI and cross-team collaboration</li>
                  <li>Contributed to global ERP migration, driving $450K in annual savings</li>
                </ul>
              </div>
              {/* Code Ninjas - Curriculum Developer */}
              <div className="relative">
                {/* Image Aligned with Title */}
                <div className="absolute -left-12 top-0">
                  <img
                    src={CodeNinjaLogo}
                    alt="Code Ninjas Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <h4 className="text-lg font-bold">Code Ninjas</h4>
                <h5 className="text-md font-semibold">Curriculum Developer</h5>
                <p className="text-sm text-gray-600">Sep 2024 - Present</p>
                <p className="text-sm text-gray-600">Contract · Remote</p>
                <p className="mt-1">
                  The largest children's coding franchise, uses my curriculum across 400+ locations, reaching over 100,000 students.
                </p>
              </div>

              {/* Code Ninjas - Assistant Site Director */}
              <div className="relative">
                <h5 className="text-md font-semibold">Assistant Site Director</h5>
                <p className="text-sm text-gray-600">Jan 2024 - Nov 2024</p>
                <p className="text-sm text-gray-600">Midland Park, NJ</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Developed new coding programs and curricula</li>
                  <li>Managed 2024 Summer Camp content and schedules</li>
                  <li>Created monthly coding challenges to boost engagement and retention</li>
                  <li>Launched YouTube Channel, boosting sign-ups</li>
                  <li>Supervised staff and oversaw daily operations</li>
                </ul>
              </div>


              {/* Code Ninjas - Code Sensei */}
              <div className="relative">
                <h5 className="text-md font-semibold">Code Sensei</h5>
                <p className="text-sm text-gray-600">Sep 2023 - Nov 2024</p>
                <p className="text-sm text-gray-600">Midland Park, NJ</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Initiated curriculum for Girl Scout coding badge</li>
                  <li>Taught JavaScript, OOP, and game development to kids</li>
                  <li>Debugged code, graded projects and provided constant communication to parents on child’s progress</li>
                  <li>Led camps on AI, machine learning, Minecraft modding (Java), and Roblox game development (Lua).</li>
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
              className="w-8 h-8" // Smaller logo size
            />
            <h4 className="text-lg font-bold">Stevens Institute of Technology</h4>
          </div>
          <p>Bachelor of Science - BS, Computer Science</p>
          <p className="text-sm text-gray-600">Aug 2021 - May 2025</p>
          <ul className="list-disc ml-6 pt-1">
            <li>Stevens Women in Computer Science Club (SWiCs)</li>
            <li>Multiple Dean List Recipient</li>
            <li>Presidential Scholarship Recipient</li>
          </ul>
          {/* Button to Link to Projects */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="/projects"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded-md transition duration-300">Final Year Project
            </a>
            <a
              href="https://github.com/nappilil/School-Projects"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded-md transition duration-300">Coursework
            </a>
          </div>
        </div >
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 text-center">

        {/* Profile Picture */}
        <img
          src="https://avatars.githubusercontent.com/u/116825146?v=4"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
        />

        <h2 className="text-3xl font-bold mb-2">Hi, I'm Lilli!</h2>
        <p className="mb-2">Software Developer</p>
        <div className="flex space-x-4 mb-4 justify-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lilli-nappi-727402262/"
            className="text-blue-600 hover:underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInLogo} alt="LinkedIn" className="w-5 h-5 mr-2" />
          </a>
          {/* Resume Download */}
          <a
            href={Resume} // Replace with actual path
            download="Lilli_Nappi_Resume.pdf"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            <img src={ResumeIcon} alt="Resume" className="w-5 h-5 mr-2" />
          </a>
          {/* Contact Email */}
          <a
            href="mailto:lnappi@stevens.edu"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            <img src={EmailIcon} alt="Email" className="w-5 h-5 mr-2" />
          </a>
        </div>
        {/* Tab List */}
        <div className="border-b border-gray-300 mb-4">
          <button
            className={`py-2 px-4 transition duration-200 ${activeTab === 'work'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-blue-500 hover:border-blue-500'
              }`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`py-2 px-4 transition duration-200 ${activeTab === 'education'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-blue-500 hover:border-blue-500'
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
