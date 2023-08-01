import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/work/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.scss";
import {useState} from "react";


function App() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  return (
    <div className="App">
      <Navbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        < Intro />
        < Portfolio />
        < Works />
        < Contact />
        < Footer />
      </div>
    </div>
  );
}

export default App;
