import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";


function App() {
  return (
    <main className="app">
      <Navbar></Navbar>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
