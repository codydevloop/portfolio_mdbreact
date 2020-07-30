import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";



// import { Container} from 'mdbreact';
// import GridExamplesPage from "../src/components/GridExamplesPage/GridExamplesPage";

function App() {
 
  return (
    
    <>
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="Contact" component={Contact} />
      </Switch>
    </Router> */}
    <Home />
    <Portfolio />
    <Contact  /> 
    </>
  );
}

export default App;
