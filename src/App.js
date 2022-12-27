import "./App.css";
import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";

import Project from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Header from "./Components/Header/Header";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Contact />
      <Footer />
      <Header />
      <Navigation />

      <Project />
      <Resume />
    </main>
  );
}

export default App;
