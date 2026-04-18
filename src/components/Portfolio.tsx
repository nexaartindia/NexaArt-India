import { motion } from 'motion/react';
import { Maximize2, Tag } from 'lucide-react';

const samples = [
  { 
    id: 1, 
    title: 'Project 1', 
    description: 'Apply once a day',
    tags: ['#Skincare', '#Minimalist', '#Daily'], 
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/drive/folders/1O0Ay_XvAhy0jsGEOdcSMLCQgHujdDoPj?usp=drive_link'
  },
  { 
    id: 2, 
    title: 'Project 2', 
    description: 'The choice of every woman',
    tags: ['#Luxury', '#Jewelry', '#Elegance'], 
    img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/drive/folders/1Bh7DGdnS6Uf6-IdLng6DTZY6iAo8bcGI?usp=drive_link'
  },
  { 
    id: 3, 
    title: 'Project 3', 
    description: 'Long lasting',
    tags: ['#Beauty', '#Gloss', '#Makeup'], 
    img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/drive/folders/1OMbF9vkq9v1JnT5VBoBOEqIKi2ldKmuh?usp=drive_link'
  },
  { 
    id: 4, 
    title: 'Project 4', 
    description: 'The Premium Choice',
    tags: ['#Luxury', '#Watch', '#Precision'], 
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/drive/folders/1seTTiXgbWL1wiiiBb68wYk5A35PGsqqH?usp=drive_link'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Creations — Real Quality.</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Explore our lately generated 4K visuals. Every piece is brand-aligned and ready to post.
          </p>
        </div>

        {samples.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {samples.map((sample, idx) => (
              <motion.a
                key={sample.id}
                href={sample.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass border-white/5 cursor-pointer block"
              >
                <img
                  src={sample.img}
                  alt={sample.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy transition-opacity duration-300 opacity-60 group-hover:opacity-80" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {sample.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-white/10 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-1">{sample.title}</h3>
                  {sample.description && (
                    <p className="text-xs text-white/60 mb-3 font-medium">{sample.description}</p>
                  )}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-xs text-white/50 uppercase tracking-widest font-semibold flex items-center gap-1">
                       <Maximize2 className="w-3 h-3 text-brand-blue" /> See this in 4K
                     </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[40px] glass">
            <p className="text-white/30 font-medium">No samples to display. Start generating to build your portfolio.</p>
          </div>
        )}
      </div>
    </section>
  );
}
