import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Header/Navbar";

import Resume from "./components/Resume/Resume";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid p-0 portfolio">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={AboutMe} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
