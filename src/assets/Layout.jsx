import TopBar from "./components/TopBar"
import BotBar from "./components/BotBar"
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './styles/Layout.css'
const Layout = () => {
  return (
    <div className="background">
      <TopBar />
      <BotBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Layout;