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
      <div>
        <Header />
        <Wrapper>
        {/* <Hero> */}
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* </Hero> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
