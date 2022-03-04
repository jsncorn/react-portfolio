import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import "./App.scss"

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Gallery />
        <Contact />
        </div>
    </div>
  );
}

export default App;
