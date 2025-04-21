import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import AppScreenshots from "./components/AppScreenshots";
import WhyAreWeUnique from "./components/WhyAreWeUnique";

import InputBahan from "./components/pages/InputBahan";
import Rekomendasi from "./components/pages/Rekomendasi";
import DetailBahan from "./components/pages/DetailBahan";

import "./index.css";

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <AppScreenshots />
      <WhyAreWeUnique />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/input" element={<InputBahan />} />
        <Route path="/rekomendasi" element={<Rekomendasi />} />
        <Route path="/detail/:id" element={<DetailBahan />} /> {/* ← ini diperbaiki */}
      </Routes>
    </Router>
  );
}


export default App;
