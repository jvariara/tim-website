import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
