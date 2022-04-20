import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import About from "./components/About/About";
import Garden from "./components/Garden/Garden";
import Home from "./components/Home /Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Plant from "./components/Plant/Plant";
import SignUp from "./components/SignUp/SignUp";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => { 
     //auto-login
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(!user) return <Welcome />

  return (
    <div className="App">
      <Router>
      <Navbar user={user} setUser={setUser}/>
      <Switch>
      <Route exact path="/login"><Login setUser={setUser} /></Route>

        <Route exact path="/garden" component={Garden} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/plants/:id" component={Plant}  />
        
        <SignUp setUser={setUser} />
        {/* <Welcome setUser={setUser}/> */}
        <Home />
        <Garden />
        <About />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
