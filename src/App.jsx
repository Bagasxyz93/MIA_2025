import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <HomePage /> 
      <Footer />
    </div>
  );
}

export default App;
