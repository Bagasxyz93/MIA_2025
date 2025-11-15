// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'; 
import ExplorePage from './pages/ExplorePage.jsx'; 
import MoreCafePage from "./pages/MoreCafePage.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/more-cafes" element={<MoreCafePage />} />
      {/* Rute lain bisa ditambahkan di sini */}
    </Routes>
  );
}

export default App;