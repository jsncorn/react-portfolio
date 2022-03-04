import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./App.scss"
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import {useState } from 'react';
import Resume from './components/resume/resume';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return ( 
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
