import React from "react";
import SongCard from "./SongCard";

const categories = {
  hindi: [
    { title: "Tum Hi Ho", artist: "Arijit Singh", audioUrl: "/assets/audio/TumHiHo.mp3" },
    { title: "Kun Faya Kun", artist: "AR Rahman", audioUrl: "/assets/HumTum.mp3" },
    { title: "Tum bin", artist: "AR Rahman", audioUrl: "/assets/TumBin.mp3" },

  ],
  marathi: [
    { title: "Zingat", artist: "Ajay-Atul", audioUrl: "/assets/audio/HumTum.mp3" },
  ],
};

const CategoryList = ({ selectedCategory, onSelectSong }) => {
  if (!selectedCategory) return null;

  const songs = categories[selectedCategory];

  return (
    <div className="category-list">
      <h2 className="text-3xl font-bold text-center mb-6 capitalize">
        {selectedCategory} Songs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} onClick={() => onSelectSong(song)} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
