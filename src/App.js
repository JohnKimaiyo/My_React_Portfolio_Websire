import "./App.css";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Contact />
      <Navbar />
      <Projects />
      <Skills />
      <Testimonials />
    </main>
  );
}

export default App;
