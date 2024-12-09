import React from "react";

const SongCard = ({ song, onClick, className }) => {
  return (
    <div onClick={onClick} className={`p-4 cursor-pointer ${className}`}>
      <h3 className="text-lg font-bold">{song.title}</h3>
      <p className="text-sm text-gray-600">{song.artist}</p>
    </div>
  );
};

export default SongCard;
