import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Book } from 'lucide-react';
import Home from './Home';
import Project from './Project';
import Contact from './Contact';
import GuestBook from './GuestBook';
import Resume from './Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGuestbook, setShowGuestbook] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const toggleGuestbook = () => {
    setShowGuestbook(prev => !prev);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        } relative overflow-hidden`}
    >

      {location.pathname !== '/resume' && (
        <header className="py-4 px-8">
          <nav
            role="navigation"
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 p-4 shadow-md flex items-center"
          >

            <div className="flex-1 items-center">
              <div className="flex space-x-4">
                <Link to="/"
                  className={`${location.pathname === '/' ? 'text-blue-600 dark:text-purple-600' : 'text-gray-800 dark:text-gray-200'}`}>
                  Home</Link>
                <Link to="/projects"
                  className={`${location.pathname === '/projects' ? 'text-blue-600 dark:text-purple-600' : 'text-gray-800 dark:text-gray-200'}`}>
                  Projects</Link>
                <Link to="/contact"
                  className={`${location.pathname === '/contact' ? 'text-blue-600 dark:text-purple-600' : 'text-gray-800 dark:text-gray-200'}`}>
                  Contact</Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleGuestbook}
                className="px-4 py-2"
                aria-label="Toggle Guestbook window"
              >
                <Book
                  className={`w-6 h-6 cursor-pointer ${showGuestbook
                      ? 'text-blue-600 dark:text-purple-600'
                      : 'text-gray-800 dark:text-gray-200'
                    }`}
                />
              </button>

              <button onClick={toggleDarkMode} className="px-4 py-2">
                {darkMode ? (
                  <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            </div>
          </nav>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guestbook" element={<GuestBook />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {showGuestbook && (
        <GuestBook onClose={() => setShowGuestbook(false)} />
      )}

      <footer className="py-4 text-center border-t mt-8">
        <p>
          © 2025{' '}
          <a
            href="https://nappilil.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nappilil.github.io
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
