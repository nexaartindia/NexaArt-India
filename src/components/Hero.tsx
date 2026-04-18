import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onInteraction: () => void;
}

export default function Hero({ onInteraction }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Motion Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/80 z-10" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Abstract AI background"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-semibold tracking-widest uppercase mb-8">
            Premium AI & UGC Agency
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
            Create Stunning AI Images <br />
            <span className="text-brand-purple">& UGC Videos</span> That Sell
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-white/60 mb-12 font-light leading-relaxed">
            Generate unlimited realistic visuals, manage your Instagram, and scale your brand — without the guesswork.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onInteraction}
              className="group w-full sm:w-auto px-10 py-5 btn-gradient text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <a
              href="#portfolio"
              className="group w-full sm:w-auto px-10 py-5 glass border-white/20 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Play className="w-5 h-5 fill-white" />
              View 31 Samples
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
