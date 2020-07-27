import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";




// import { Container} from 'mdbreact';
// import GridExamplesPage from "../src/components/GridExamplesPage/GridExamplesPage";

function App() {
 
  return (
    <>
      {/* <GridExamplesPage /> */}

      {/* <Router>
        <Switch>
          <Route exact path="/portfolio_mdbreact" component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
        </Switch>
        
      </Router> */}
    <Home />
    <Portfolio />
      </>
  );
}

export default App;
