import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Leaf, Zap, Instagram, Twitter, ChevronLeft, Quote } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { poems, Poem } from './data/poems';
import PoetryCard from './components/PoetryCard';

export default function App() {
  const [filter, setFilter] = useState<'all' | 'hati' | 'kehidupan' | 'motivasi'>('all');
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

  const filteredPoems = useMemo(() => {
    if (filter === 'all') return poems;
    return poems.filter(p => p.category === filter);
  }, [filter]);

  const categories = [
    { id: 'all', label: 'Semua', icon: null },
    { id: 'hati', label: 'Hati', icon: <Heart size={16} /> },
    { id: 'kehidupan', label: 'Kehidupan', icon: <Leaf size={16} /> },
    { id: 'motivasi', label: 'Motivasi', icon: <Zap size={16} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--bg-warm)]/80 backdrop-blur-md border-b border-amber-100">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => { setSelectedPoem(null); setFilter('all'); }}
          >
            <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center text-white font-display font-bold">G</div>
            <span className="font-display text-xl font-bold tracking-tight">Antologi Gema</span>
          </div>
          <div className="flex gap-4">
            <Instagram size={20} className="text-stone-400 hover:text-amber-600 transition-colors cursor-pointer" />
            <Twitter size={20} className="text-stone-400 hover:text-amber-600 transition-colors cursor-pointer" />
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {!selectedPoem ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pb-20"
            >
              {/* Hero */}
              <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/writing/1920/1080?blur=1" 
                  alt="Hero Background"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center px-6 max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-amber-300 font-serif italic text-xl mb-4 block"
                  >
                    Antologi Puisi Digital
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-display text-white font-bold mb-6 leading-tight"
                  >
                    Setiap Kata Memiliki <br /> <span className="text-amber-400 italic">Jiwanya Sendiri.</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-stone-200 text-lg md:text-xl font-serif max-w-2xl mx-auto opacity-90"
                  >
                    Temukan kedamaian dalam bait-bait yang merangkai rasa, menceritakan hidup, dan membakar semangat.
                  </motion.p>
                </div>
              </section>

              {/* Filters */}
              <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
                <div className="bg-white p-2 rounded-2xl shadow-xl border border-amber-50 inline-flex gap-1 md:gap-2 max-w-full overflow-x-auto no-scrollbar whitespace-nowrap">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter(cat.id as any)}
                      className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium ${
                        filter === cat.id 
                          ? 'bg-amber-700 text-white shadow-lg' 
                          : 'text-stone-500 hover:bg-amber-50'
                      }`}
                    >
                      {cat.icon}
                      {cat.label}
                    </button>
                  ))}
                </div>
              </section>

              {/* Grid */}
              <section className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredPoems.map((poem) => (
                      <PoetryCard 
                        key={poem.id} 
                        poem={poem} 
                        onClick={() => setSelectedPoem(poem)} 
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-5xl mx-auto px-6 py-12"
              id="poem-detail"
            >
              <button 
                onClick={() => setSelectedPoem(null)}
                className="flex items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors mb-12 group"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                Kembali ke Antologi
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="md:sticky md:top-24">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-2"
                  >
                    <img 
                      src={selectedPoem.image} 
                      alt={selectedPoem.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="mt-8 flex items-center gap-4 text-amber-700">
                    <Quote size={32} className="opacity-20" />
                    <p className="font-serif italic text-lg opacity-70">
                      "Puisi adalah pelarian dari bisingnya dunia."
                    </p>
                  </div>
                </div>

                <div className="py-8">
                  <span className="text-amber-600 font-medium uppercase tracking-[0.2em] text-sm block mb-4">
                    {selectedPoem.category}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-display font-bold text-stone-800 mb-8 leading-tight">
                    {selectedPoem.title}
                  </h2>
                  <div className="markdown-body">
                    <ReactMarkdown>{selectedPoem.content}</ReactMarkdown>
                  </div>
                  <div className="mt-12 pt-12 border-t border-amber-100 italic font-serif text-stone-400">
                    Ditulis oleh {selectedPoem.author}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center text-white font-display font-bold">G</div>
              <span className="font-display text-xl font-bold">Antologi Gema</span>
            </div>
            <p className="font-serif italic leading-relaxed">
              Sebuah ruang tenang di tengah riuhnya dunia digital, menyajikan keindahan kata dalam setiap tarikan napas.
            </p>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Kategori</h4>
            <ul className="space-y-3 font-medium">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Puisi Hati</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Puisi Kehidupan</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Puisi Motivasi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Mari Berpuisi</h4>
            <p className="mb-6">Dapatkan inspirasi kata-kata setiap harinya di kotak masuk Anda.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Alamat email..." 
                className="bg-stone-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 flex-grow"
              />
              <button className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors">
                Kirim
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm uppercase tracking-widest">
          <span>&copy; 2026 Antologi Gema. Semua Hak Dilindungi.</span>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
