import React from "react";

const SongCard = ({ song, onClick }) => (
  <div
    className="song-card p-4 border rounded shadow-lg cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    <h3 className="text-lg font-semibold">{song.title}</h3>
    <p className="text-sm text-gray-500">{song.artist}</p>
  </div>
);

export default SongCard;
