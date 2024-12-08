import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryList from "./components/CategoryList";
import Player from "./components/Player";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <HeroSection onSelectCategory={setSelectedCategory} />
      <CategoryList
        selectedCategory={selectedCategory}
        onSelectSong={setCurrentSong}
      />
      {currentSong && <Player currentSong={currentSong} />}
      <Footer />
    </div>
  );
};

export default App;
