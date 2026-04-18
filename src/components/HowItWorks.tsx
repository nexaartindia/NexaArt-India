import { motion } from 'motion/react';
import { Sparkles, Edit3, Send } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Generate',
    desc: 'Upload your product or brief idea. Our refined AI engines create hyper-realistic visuals in minutes.'
  },
  {
    icon: <Edit3 className="w-8 h-8" />,
    title: 'Refine',
    desc: 'Review concepts and request unlimited revisions. We align every pixel with your brand identity.'
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: 'Deploy',
    desc: 'You receive high-res files instantly, or we manage your Instagram scheduled posting for total hands-off growth.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-blue text-xs font-black uppercase tracking-[0.25em] mb-4 block">Process</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Seamless Content <br /><span className="text-white/30 italic">From Idea to Viral.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-navy border border-white/10 flex items-center justify-center text-brand-purple mb-8 shadow-xl">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-purple text-white font-black text-sm flex items-center justify-center border-4 border-navy">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>
              <p className="text-white/40 leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
