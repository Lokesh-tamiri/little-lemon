import React from "react";
//import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking";
import Header from "./components/Header.jsx";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
