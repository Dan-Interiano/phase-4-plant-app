import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import About from "./components/About/About";
import Garden from "./components/Garden/Garden";
import Home from "./components/Home /Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/garden" component={Garden} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home}/>
        <Home />
        <Garden />
        <About />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
