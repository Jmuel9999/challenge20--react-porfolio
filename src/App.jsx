import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";


function App() {
  const [about, setAbout] = useState(true);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <main className="app">
      <Navbar about={about} setAbout={setAbout} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}></Navbar>
      <div>
        {about ? (
          <>
            <About></About>
          </>
        ) 
        : portfolio ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) 
        : (
          <>
            <Contact></Contact>
          </>
        )}
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
