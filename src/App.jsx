import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app">
        <div>
          <Navbar />
        </div>
        <div className="card">
          <Header />
          <MainContent />
          <button className="button">Sign up for Newsletters</button>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
