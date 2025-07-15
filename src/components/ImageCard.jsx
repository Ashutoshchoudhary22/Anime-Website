import { forwardRef } from 'react';
import { Download } from 'lucide-react';

const ImageCard = forwardRef(({ photo }, ref) => (
  <div ref={ref} className="relative mb-4 break-inside-avoid">
    <img
      src={photo.src}
      alt={photo.alt}
      className="w-full rounded-xl shadow-md hover:opacity-90 transition"
      loading="lazy"
    />
    {/* download attribute से बिना‑सर्वर download */}
    <a
      href={photo.src}
      download
      className="absolute bottom-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full"
      title="Download"
    >
      <Download size={18} />
    </a>
  </div>
));

export default ImageCard;
