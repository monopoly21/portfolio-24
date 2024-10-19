"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const FavoriteSong = ({ isDarkMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('./audio/songs.mp3');

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`p-4 rounded-lg flex items-center justify-between mt-60 ${isDarkMode ? 'bg-zinc-900' : 'bg-white shadow-md'}`}>
      <div className="flex items-center">
        <img
          src="./img/song.jpg"
          alt="Album Cover"
          className="w-16 h-16 rounded-lg mr-4"
        />
        <div>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>KEEP UP</h3>
          <p className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Odetari</p>
        </div>
      </div>
      <button
        className={`flex items-center justify-center p-2 rounded-lg transition duration-300 ${
          isDarkMode
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-green-400 hover:bg-green-500'
        }`}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        ) : (
          <Play className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        )}
      </button>
    </div>
  );
};

export default FavoriteSong;