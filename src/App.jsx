import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Placeholder from './pages/Placeholder.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-verdits-bg text-verdits-navy">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Placeholder type="Login" />} />
          <Route path="/register" element={<Placeholder type="Register" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
