import { motion } from 'motion/react';
import { Zap, ShieldCheck, BarChart3, Users, Camera, Instagram } from 'lucide-react';

const coreFeatures = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Speed',
    desc: '2-day delivery guarantee — faster than top-tier traditional agencies.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Quality',
    desc: 'AI that looks real, not fake — photorealistic perfection for high-end brands.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Scale',
    desc: 'Unlimited content creation, zero limits. Grow without the hiring headache.'
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: 'Management',
    desc: 'We do the heavy lifting, you scale. Complete Instagram ecosystem control.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-blue text-xs font-black uppercase tracking-[0.2em] mb-4 block">Our Edge</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Why Leading Brands <br /><span className="text-white/30 italic">Choose NexaArt.</span></h2>
            
            <div className="space-y-8">
              {coreFeatures.map((f, idx) => (
                <motion.div 
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{f.title}</h3>
                    <p className="text-white/40 leading-relaxed font-light">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[40px] bg-brand-blue/10 border border-brand-blue/20 flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center shadow-2xl shadow-brand-blue/40">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="font-serif font-bold text-2xl">AI Images</div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-black">4K Resolution</p>
            </motion.div>

             <motion.div 
              whileHover={{ y: -5 }}
              className="mt-12 p-8 rounded-[40px] bg-brand-purple/10 border border-brand-purple/20 flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-purple flex items-center justify-center shadow-2xl shadow-brand-purple/40">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="font-serif font-bold text-2xl">UGC Videos</div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-black">Ad Creative</p>
            </motion.div>

             <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[40px] glass flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-white/10">
                <Instagram className="w-8 h-8 text-navy" />
              </div>
              <div className="font-serif font-bold text-2xl">Growth</div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-black">Daily Posts</p>
            </motion.div>

             <motion.div 
              whileHover={{ y: -5 }}
              className="mt-12 p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="font-serif font-bold text-2xl">Analytics</div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-black">Monthly ROI</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Play(props: any) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
