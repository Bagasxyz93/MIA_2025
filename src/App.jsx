import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <HomePage /> 
      <Footer />
    </div>
  );
}

export default App;
