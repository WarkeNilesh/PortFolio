import "./App.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Project from "./Component/Projects/Project";
import Qualification from "./Component/Qualification/Qualification";
// import ScrollUp from "./Component/ScrollUp/ScrollUp";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
        <main className="main">
          <Home/>
          <About/>
          <Skills/>
          <Qualification/>
          <Project/>
          <Contact/>
        </main>
      <Footer/>
      {/* <ScrollUp/> */}
    </div>
  );
}

export default App;
