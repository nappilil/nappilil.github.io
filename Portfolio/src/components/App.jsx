import './App.css'
import Home from './Home';
import { Route, Routes, Link, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-4 px-8 shadow-md">
        <nav role="navigation" className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lilli Nappi</h1>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <footer className="py-4 text-center border-t mt-8">
        <p>© 2025 Lilli Nappi</p>
      </footer>
    </div>
  );
}

export default App;