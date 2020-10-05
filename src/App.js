import React from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch></Switch>
    </Router>
  );
}

export default App;
