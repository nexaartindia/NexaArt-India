import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/HowItWorks'; // Incorrect import in existing file, but let's stick to the structure or fix it if Footer exists
import OriginalFooter from './components/Footer'; 
import AuthPopup from './components/AuthPopup';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        setShowPopup(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInteraction = () => {
    if (!hasInteracted && !user && !loading) {
      setHasInteracted(true);
      // Small delay for better UX
      setTimeout(() => setShowPopup(true), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-navy selection:bg-brand-blue/30" onClick={handleInteraction}>
      <Navbar onInteraction={handleInteraction} user={user} />
      
      <main>
        <Hero onInteraction={handleInteraction} />
        <Portfolio />
        <Pricing />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>

      <OriginalFooter />

      <AnimatePresence>
        {showPopup && !user && (
          <AuthPopup onClose={() => setShowPopup(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
