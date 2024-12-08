import React, { useEffect, useRef, useState } from "react";

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the song is playing

  // Effect to handle the audio change and play the new song
  useEffect(() => {
    if (!currentSong || !audioRef.current) return;

    const audio = audioRef.current;
    
    // Log the audio source URL for debugging
    console.log("Audio source:", currentSong?.audioUrl);
    
    // Check if audioUrl is valid
    if (!currentSong?.audioUrl) {
      console.error("Invalid audio URL");
      return;
    }

    // Reset and load the new song whenever it changes
    audio.pause();
    audio.load();

    // Set the new audio source
    audio.src = currentSong.audioUrl;

    // Play the song when it is ready
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true); // Set state to playing
      } catch (err) {
        console.error("Error playing the audio:", err);
      }
    };

    // Only play if not already playing
    if (isPlaying) {
      playAudio();
    }
  }, [currentSong, isPlaying]);

  // Toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.error("Error playing the audio:", err);
      });
    }
    setIsPlaying(!isPlaying); // Toggle the play state
  };

  return (
    <div>
      <h2 className="text-xl font-bold">{currentSong?.title}</h2>
      <p className="text-gray-400">{currentSong?.artist}</p>
      <div className="flex items-center space-x-4">
        <button onClick={togglePlayPause} className="bg-blue-500 text-white px-4 py-2 rounded">
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio ref={audioRef} controls>
        <source src={currentSong?.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
