import { motion } from 'motion/react';
import { Poem } from '../data/poems';
import { ArrowRight } from 'lucide-react';

interface PoetryCardProps {
  poem: Poem;
  onClick: () => void;
}

export default function PoetryCard({ poem, onClick }: PoetryCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      id={`poem-card-${poem.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-amber-50"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={poem.image}
          alt={poem.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white font-medium flex items-center gap-2">
            Baca Selengkapnya <ArrowRight size={16} />
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-amber-900 uppercase tracking-wider">
            {poem.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-amber-700 transition-colors">
          {poem.title}
        </h3>
        <p className="text-stone-500 font-serif line-clamp-2 italic italic opacity-80">
          {poem.content}
        </p>
      </div>
    </motion.div>
  );
}
