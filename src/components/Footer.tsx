import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-serif font-bold tracking-tight mb-6">
              Nexa<span className="text-brand-purple">Art</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Hyper-realistic AI content and premium Instagram management for the world's most ambitious brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-brand-blue hover:border-brand-blue/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-brand-blue hover:border-brand-blue/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-brand-blue hover:border-brand-blue/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-blue transition-colors">AI Content Generation</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">UGC Video Ad Creative</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Instagram Growth</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Brand Identity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6 font-light">Join our elite list for AI marketing strategies.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-1 outline-none focus:border-brand-purple/50 transition-colors"
              />
              <button className="bg-white text-navy px-4 py-3 rounded-xl font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-xs text-white/20">
            Copyright © 2024 NexaArt. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
