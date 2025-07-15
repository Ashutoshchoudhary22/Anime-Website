import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiPlay, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function EpisodeCard({ episode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default to muted

  if (!episode) {
    return (
      <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center text-white">
        No episode data
      </div>
    );
  }

  const toggleMute = () => {
    setIsMuted((prev) => !prev); // Toggle mute state
  };

  return (
    <div
      className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/watch/${episode.id}`}>
        <video
          src={episode.video} // Use 'video' field from episodes.js
          poster={episode.poster} // Fallback poster if video fails
          autoPlay
          muted={isMuted} // Control mute state
          loop
          playsInline
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            console.error('Video load failed for', episode.title, ':', episode.video, e.message, e);
            e.target.style.display = 'none'; // Hide video on failure
            if (episode.poster) {
              e.target.parentElement.innerHTML = `<img src="${episode.poster}" alt="${episode.title}" class="w-full h-full object-cover" />`;
            } else {
              e.target.parentElement.innerHTML = `<p class="text-white text-center">Video failed: ${e.message || 'Check path/file'}</p>`;
            }
          }}
          onCanPlay={(e) => console.log('Video can play for', episode.title, e.target.src)}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <FiPlay size={40} className="text-white" />
          </div>
        )}
      </Link>
      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
        <p className="text-xs text-white font-medium line-clamp-2">{episode.title}</p>
        <div className="flex items-center space-x-2">
          <a
            href={episode.video} // Use 'video' for download
            download={episode.title + '.mp4'}
            className="text-white text-xs hover:text-pink-400"
            title="Download episode"
          >
            <FiDownload size={16} />
          </a>
          <button
            onClick={toggleMute}
            className="text-white hover:text-pink-400"
            title={isMuted ? 'Unmute video' : 'Mute video'}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}