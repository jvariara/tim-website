import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <About />
      <Carousel />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
