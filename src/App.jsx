import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <main className="flex">
          <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={About}/>
              <Route exact path="/Contact" component={Contact}/>
              <Route exact path="/Portfolio" component={Portfolio}/>
              <Route exact path="/Resume" component={Resume}/>
            </Switch>
          <Footer></Footer>
        </main>
      </div>
    </Router>
  );
}

export default App;
