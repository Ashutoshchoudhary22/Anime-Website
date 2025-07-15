// // src/pages/PhotoDetail.jsx
// import { Link, useParams } from 'react-router-dom';
// import { photos } from '../data/photos';

// export default function PhotoDetail() {
//   const { id } = useParams();
//   const photo = photos.find((p) => String(p.id) === id);

//   if (!photo) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center">
//         <h1 className="text-2xl font-semibold mb-4">404 – Photo not found</h1>
//         <Link
//           to="/"
//           className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90"
//         >
//           Go back
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <Link to="/" className="text-blue-500 hover:underline">&larr; Back</Link>

//       <img
//         src={photo.src}
//         alt={photo.alt}
//         className="w-full rounded-xl shadow-lg my-6"
//       />

//       <h2 className="text-xl font-semibold mb-2">
//         {photo.title || photo.alt || `Photo #${photo.id}`}
//       </h2>

//       {photo.description && (
//         <p className="text-gray-700 mb-4">{photo.description}</p>
//       )}

//       {/* Optional extra metadata */}
//       <div className="text-sm text-gray-500 space-y-1">
//         {photo.camera && <div>Camera: {photo.camera}</div>}
//         {photo.location && <div>Location: {photo.location}</div>}
//       </div>

//       {/* Download button (same file) */}
//       <a
//         href={photo.src}
//         download
//         className="inline-block mt-6 px-4 py-2 bg-black text-white rounded-md hover:opacity-90"
//       >
//         Download
//       </a>
//     </div>
//   );
// }
