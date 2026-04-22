import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setNeedsInteraction(true);
      });
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setNeedsInteraction(false);
    } catch (error) {
      setNeedsInteraction(true);
    }
  };

  return (
    <div className="music-player card">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/01/20/audio_35f6f1f0f6.mp3?filename=romantic-piano-13267.mp3"
      />
      <button onClick={togglePlayback} aria-label="Toggle background music">
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <span>
        <Volume2 size={16} /> {needsInteraction ? "Tap to enable music" : "Background melody"}
      </span>
    </div>
  );
}
