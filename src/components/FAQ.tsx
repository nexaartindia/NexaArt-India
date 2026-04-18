import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you need a dedicated account manager?",
    answer: "Yes, our Pro and Elite plans include a dedicated account manager who handles your strategy and feedback loops directly."
  },
  {
    question: "Can I change images after they are generated?",
    answer: "Absolutely. All plans include unlimited revisions. We won't stop until you have the perfect asset for your brand."
  },
  {
    question: "Is the content real or AI?",
    answer: "Our content is 100% AI-generated but engineered for photorealism. Many of our clients find our AI visuals convert better than traditional photography because we can control every detail of the lighting and composition."
  },
  {
    question: "What is the turnaround time?",
    answer: "We guarantee a 2-day max turnaround for our Basic plan. Growth and Elite plan members often receive assets in under 24 hours."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Common Questions</h2>
          <p className="text-white/40">Everything you need to know about our high-tech content agency.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-3xl overflow-hidden border-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-white/5"
              >
                <span className="text-lg font-serif font-bold">{faq.question}</span>
                {activeIndex === idx ? (
                  <Minus className="w-5 h-5 text-gold" />
                ) : (
                  <Plus className="w-5 h-5 text-white/30" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-white/50 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
