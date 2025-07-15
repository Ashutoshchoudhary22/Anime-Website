import { useState } from 'react';
import { FiDownload, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { featured } from '../data/featured'; // Import data from featured.js

export default function FeaturedGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [unmutedVideoId, setUnmutedVideoId] = useState(null);
  const [isModalMuted, setIsModalMuted] = useState(true);

  const openModal = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setIsModalMuted(true);
  };

  const toggleMute = (id) => {
    setUnmutedVideoId((prev) => (prev === id ? null : id));
  };

  const toggleModalMute = () => {
    setIsModalMuted((prev) => !prev);
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-4 auto-rows-[180px] sm:auto-rows-[120px]">
        {featured.map((item, idx) => (
          <div
            key={item.id}
            className={`relative rounded-lg overflow-hidden shadow-lg h-[180px] ${
              idx === 0 ? 'sm:col-span-2 sm:row-span-2 sm:h-[240px]' : 'sm:h-[120px]'
            }`}
          >
            <video
              src={item.src}
              autoPlay
              muted={unmutedVideoId !== item.id}
              loop
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(item.src)}
              onError={(e) => {
                console.error('Video load failed for', item.title, ':', item.src, e.message, e);
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<p class="text-white text-center">Video failed: ${e.message || 'Check path/file'}</p>`;
              }}
              aria-label={`Preview of ${item.title}`}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <a
                href={item.src}
                download={`${item.title}.mp4`}
                className="text-white bg-pink-600 p-1 sm:p-2 rounded-full hover:bg-pink-700 transition"
                title={`Download ${item.title} video`}
                aria-label={`Download ${item.title} video`}
              >
                <FiDownload size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 flex justify-between items-end">
              <p className="text-[10px] sm:text-xs text-white line-clamp-2">
                {item.title}
              </p>
              <button
                onClick={() => toggleMute(item.id)}
                className="text-white hover:text-pink-400"
                title={unmutedVideoId === item.id ? 'Mute video' : 'Unmute video'}
                aria-label={unmutedVideoId === item.id ? 'Mute video' : 'Unmute video'}
              >
                {unmutedVideoId === item.id ? <FiVolume2 size={16} /> : <FiVolumeX size={16} />}
              </button>
            </div>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 rounded-lg p-2 sm:p-4 w-full h-full sm:max-w-3xl sm:h-auto">
            <button
              onClick={closeModal}
              className="absolute top-1 sm:top-2 right-1 sm:right-2 text-white bg-pink-600 rounded-full p-1 sm:p-2 hover:bg-pink-700"
              aria-label="Close video modal"
            >
              ✕
            </button>
            <div className="relative">
              <video
                src={selectedVideo}
                autoPlay
                muted={isModalMuted}
                loop
                playsInline
                className="w-full h-auto max-h-[90vh] sm:max-h-[80vh] object-contain"
                onError={(e) => {
                  console.error('Modal video failed for', selectedVideo, ':', e.message, e);
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<p class="text-white text-center">Modal video failed: ${e.message || 'Check path/file'}</p>`;
                }}
                aria-label={`Full view of selected anime video`}
              />
              <button
                onClick={toggleModalMute}
                className="absolute bottom-2 right-2 text-white hover:text-pink-400"
                title={isModalMuted ? 'Unmute video' : 'Mute video'}
                aria-label={isModalMuted ? 'Unmute video' : 'Mute video'}
              >
                {isModalMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}