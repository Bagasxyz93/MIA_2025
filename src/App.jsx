import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'; 
import ExplorePage from './pages/ExplorePage.jsx'; 
import MoreCafePage from "./pages/MoreCafePage.jsx";
import CafeDetailPage from "./pages/CafeDetailPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/more-cafes" element={<MoreCafePage />} />
      <Route path="/cafe/:id" element={<CafeDetailPage />} /> 
      <Route path="/orders" element={<OrderPage />} /> 
    </Routes>
  );
}

export default App;