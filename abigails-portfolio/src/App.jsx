import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/work/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
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
