import { useState } from 'react';
import { FiDownload, FiVolume2, FiVolumeX } from 'react-icons/fi';
import vi from '../assets/favourites Anime/video18.mp4';
import vid from '../assets/favourites Anime/video19.mp4';
import vide from '../assets/favourites Anime/video20.mp4';
import video from '../assets/favourites Anime/video21.mp4';
import videos from '../assets/favourites Anime/video22.mp4';

const animeData = [
  {
    id: 401,
    src: vi,
    title: 'Shingeki no Kyojin',
  },
  {
    id: 402,
    src: vid,
    title: 'One Punch Man',
  },
  {
    id: 403,
    src: vide,
    title: 'Black Clover',
  },
  {
    id: 404,
    src: video,
    title: 'Hunter x Hunter',
  },
  {
    id: 405,
    src: videos,
    title: 'Demon Slayer',
  },
];

export default function Anime() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);
  const [unmutedVideoId, setUnmutedVideoId] = useState(null);
  const [isModalMuted, setIsModalMuted] = useState(true);

  const openModal = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setIsModalOpen(true);
    setError(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setError(null);
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
        {animeData.map((item, idx) => (
          <div
            key={item.id}
            className={`relative rounded-lg overflow-hidden shadow-lg group h-[180px] ${
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
                setError(`Video failed for ${item.title}: ${e.message || 'Check path/file'}`);
              }}
              aria-label={`Preview of ${item.title}`}
            />
            {error && error.includes(item.title) ? (
              <p className="absolute inset-0 flex items-center justify-center text-white text-center text-xs sm:text-sm bg-black/80">
                {error}
              </p>
            ) : (
              <>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
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
              </>
            )}
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
              {error && error.includes(selectedVideo) ? (
                <p className="text-white text-center text-sm sm:text-base">
                  {error}
                </p>
              ) : (
                <>
                  <video
                    src={selectedVideo}
                    autoPlay
                    muted={isModalMuted}
                    loop
                    playsInline
                    className="w-full h-auto max-h-[90vh] sm:max-h-[80vh] object-contain"
                    onError={(e) => {
                      console.error('Modal video failed for', selectedVideo, ':', e.message, e);
                      setError(`Modal video failed: ${e.message || 'Check path/file'}`);
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}