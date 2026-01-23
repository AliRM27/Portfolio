import React from "react";
import {
  About,
  Navbar,
  Experience,
  Skills,
  Contact,
  Projects,
  Header,
  Footer,
} from "./components/imports";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
