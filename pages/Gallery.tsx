
import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Clinic', 'Equipment', 'Case', 'Team'];
  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Visual Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern facilities and see some of the incredible transformations we've achieved for our patients.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filter === cat 
                ? 'bg-[#228B22] text-white shadow-lg' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-[#228B22] hover:text-[#228B22]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-3xl overflow-hidden shadow-sm cursor-pointer"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-bold text-2xl mb-2">{item.title}</p>
                  <p className="text-white/80 text-sm uppercase tracking-widest">{item.category}</p>
                  <div className="mt-4 inline-flex items-center space-x-2 text-[#228B22] bg-white px-4 py-2 rounded-full font-bold">
                    <Maximize2 size={16} />
                    <span>View Larger</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-gray-300 p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-full rounded-2xl shadow-2xl zoom-in-95 duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
