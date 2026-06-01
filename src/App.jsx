import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Requests from "./pages/Request";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <React.StrictMode>
        <Router>
          <Header />
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/request-printing" element={<Requests />} />
            <Route exact path="/contact-us" element={<Contact />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </HelmetProvider>
  );
}

export default App;
