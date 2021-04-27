import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero"
import './App.css';

function App() {
  return (
    <Router>
        {/* <Hero /> */}
        <Header />
        {/* <Hero /> */}
        <Wrapper>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
    </Router>
  );
}

export default App;
