import React, { useState } from "react";
import SongCard from "./SongCard";
import { motion } from "framer-motion";

const categories = {
  hindi: [
    { title: "Tum Hi Ho", artist: "Arijit Singh", audioUrl: "/assets/TumHiHo.mp3" },
    { title: "Kun Faya Kun", artist: "AR Rahman", audioUrl: "/assets/HumTum.mp3" },
    { title: "Tum bin", artist: "AR Rahman", audioUrl: "/assets/TumBin.mp3" },
    { title: "Tum hi hos", artist: "AR Rahman", audioUrl: "/assets/TumHiHos.mp3" },
    { title: "Tera Bina", artist: "AR Rahman", audioUrl: "/assets/-263712.mp3" },
    { title: "Pehla Love", artist: "AR Rahman", audioUrl: "/assets/PehlaLove.mp3" },
  ],
  marathi: [
    { title: "Zingat", artist: "Ajay-Atul", audioUrl: "/assets/audio/HumTum.mp3" },
    { title: "Tukda Kaljacha Tu Angai Song", artist: "Ajay-Atul", audioUrl: "/assets/TukdaKaljachaTuAngaiSong.mp3" },
    { title: "Ved Tuza", artist: "Ajay-Atul", audioUrl: "/assets/VedTuza.mp3" },
    { title: "Vatewari Mogra", artist: "Swapnil Bandodkar _ Vaishali Samant", audioUrl: "/assets/Vatewari Mogra.mp3" },
    { title: "Sukh Kalale", artist: "Ajay-Atul", audioUrl: "assets/Sukh Kalale - Ved.mp3" },
    { title: "Kevdyach Pan Tu", artist: "Ajay-Atul", audioUrl: "/assets/Kevdyach Pan Tu.mp3" },
  ],
};

const CategoryList = ({ selectedCategory }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const songs = categories[selectedCategory] || [];

  const handlePlayPause = (song) => {
    if (selectedSong?.audioUrl === song.audioUrl && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (audio) audio.pause(); // Pause any previously playing audio
      const newAudio = new Audio(song.audioUrl);
      newAudio.play();
      setAudio(newAudio);
      setSelectedSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <h2 className="text-4xl font-extrabold text-center text-white mb-10 capitalize drop-shadow-md">
        {selectedCategory} Songs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SongCard
              song={song}
              onClick={() => handlePlayPause(song)}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      {selectedSong && (
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg text-center max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2">{selectedSong.title}</h3>
          <p className="text-lg text-gray-600 mb-4">{selectedSong.artist}</p>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handlePlayPause(selectedSong)}
              className={`px-4 py-2 text-white font-bold rounded-lg ${
                isPlaying ? "bg-red-500" : "bg-green-500"
              } hover:opacity-80 transition`}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              onClick={() => {
                if (audio) audio.pause();
                setIsPlaying(false);
                setSelectedSong(null);
              }}
              className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:opacity-80 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryList;
