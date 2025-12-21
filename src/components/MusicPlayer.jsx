import { useMusic } from "../hooks/useMusic";

export default function MusicPlayer({ src }) {
  const { audioRef, isPlaying, toggle } = useMusic(src);
  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <button className="music-btn" onClick={toggle}>
        {isPlaying ? "⏸" : "🎵"}
      </button>
    </>
  );
}
