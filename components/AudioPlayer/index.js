'use client';
import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const tryPlayAudio = () => {
      if (!hasStarted) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch((err) => {
            console.log('Autoplay blocked:', err);
          });
      }
    };

    // Try to play on mousemove
    window.addEventListener('mousemove', tryPlayAudio);

    return () => {
      window.removeEventListener('mousemove', tryPlayAudio);
    };
  }, [hasStarted]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white/20 backdrop-blur-lg rounded-full p-3 shadow-lg">
      <audio ref={audioRef} loop src="/audio/background.mp3" />
      <button
        onClick={togglePlay}
        className="text-white hover:scale-110 transition-transform"
      >
        {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
