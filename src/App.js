import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
