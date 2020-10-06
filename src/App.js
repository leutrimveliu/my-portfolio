import React from "react";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <AboutMe />
      <Resume />

      <Projects />
      <Contact />
      <Footer />
      <Switch></Switch>
    </Router>
  );
}

export default App;
