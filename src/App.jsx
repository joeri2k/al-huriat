import { useState } from "react";
import * as React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Requests from "./pages/Request";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <React.StrictMode>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/request-printing" element={<Requests />} />
            <Route exact path="/contact-us" element={<Contact />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </>
  );
}

export default App;
