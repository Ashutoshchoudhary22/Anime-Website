import { episodes } from '../data/episodes';
import EpisodeCard from './EpisodeCard';

export default function CategoryGrid() {
  return (
    <section className="px-4 max-w-7xl mx-auto mt-8">
      <h2 className="text-lg font-semibold text-white mb-4">All Episodes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
}