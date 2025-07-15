// src/components/SearchBar.jsx
import { useState } from 'react';   // <-- यह पंक्ति जोड़ें

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search photos"
        className="flex-grow rounded-l-md px-4 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 rounded-r-md"
      >
        Go
      </button>
    </form>
  );
}
