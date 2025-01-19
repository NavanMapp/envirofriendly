import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Recycle from './pages/Recycle';
import Contact from './pages/Contact';
import EducationalTips from './pages/EducationalTips';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Recycle />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<EducationalTips />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
