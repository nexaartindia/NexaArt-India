import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'BASIC',
    subtitle: 'Perfect for startups',
    price: '₹4,999',
    features: [
      'Unlimited realistic images',
      'High-resolution delivery',
      '2-day maximum turnaround',
      'Brand-aligned editing',
      'Unlimited revisions',
    ],
    notIncluded: [],
    popular: false,
    color: 'white',
  },
  {
    name: 'ADVANCED',
    subtitle: 'Grow your presence',
    price: '₹7,499',
    features: [
      'Unlimited realistic images',
      'Complete Instagram management',
      'Daily posting & stories',
      'Content calendar included',
      'Hashtag research',
      'Monthly analytics reports',
    ],
    notIncluded: [],
    popular: false,
    color: 'purple',
  },
  {
    name: 'PRO',
    subtitle: 'Maximum impact',
    price: '₹14,999',
    features: [
      'Unlimited realistic images',
      '3 premium UGC videos',
      'Professional video editing',
      'Script development',
      'Brand-aligned editing',
      '2-day maximum delivery',
    ],
    notIncluded: [],
    popular: true,
    color: 'purple',
  },
  {
    name: 'PREMIUM',
    subtitle: 'Complete brand domination',
    price: '₹19,999',
    features: [
      'Unlimited realistic images',
      'Unlimited UGC videos',
      'Complete Instagram management',
      'Daily content posting',
      'Priority 2-day delivery',
      'Dedicated account manager',
      'Monthly strategy calls',
    ],
    notIncluded: [],
    popular: false,
    color: 'white',
  },
];

export default function Pricing() {
  const handleChoosePlan = (planName: string) => {
    const phoneNumber = '7829256656';
    // Format plan name for the message (e.g. BASIC -> Basic)
    const formattedPlanName = planName.charAt(0) + planName.slice(1).toLowerCase();
    const message = `I want to buy your ${formattedPlanName} plan`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-brand-purple/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Simple, Scalable Pricing</h2>
          <p className="text-xl text-white/50">Choose the perfect plan for your brand's growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[40px] border transition-all duration-500 ${
                plan.popular 
                ? 'bg-navy border-brand-purple/50 shadow-2xl shadow-brand-purple/10 lg:-translate-y-4' 
                : 'glass border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">{plan.subtitle}</h3>
                <div className="text-3xl font-serif font-bold mb-4">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-white/40 font-medium">/month</span>
                </div>
              </div>

              <div className="flex-1 mb-10 space-y-4">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-brand-purple' : 'text-brand-blue'}`} />
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded && plan.notIncluded.map(feature => (
                  <div key={feature} className="flex items-start gap-3 opacity-30">
                    <Check className="w-5 h-5 shrink-0 text-white/50" />
                    <span className="text-sm text-white/50 line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleChoosePlan(plan.name)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.popular 
                  ? 'btn-gradient text-white hover:scale-105 active:scale-95' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
