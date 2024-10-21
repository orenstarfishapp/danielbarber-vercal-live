import logo from './img/logo.png';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './layout/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './layout/Footer';
function App() {
  return (
    <>
      <Header logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
