import { motion } from 'motion/react';
import { Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import { User, signOut } from 'firebase/auth';
import { auth } from '../firebase';

interface NavbarProps {
  onInteraction: () => void;
  user?: User | null;
}

export default function Navbar({ onInteraction, user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tight"
        >
          Nexa<span className="text-brand-purple">Art</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onInteraction}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {user ? (
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <div className="flex items-center gap-2 text-white/70">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <UserIcon className="w-4 h-4" />
                  )}
                </div>
                <span className="text-sm font-medium hidden lg:block">{user.displayName || user.email}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="p-2 text-white/40 hover:text-white transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onInteraction}
              className="px-6 py-2.5 btn-gradient text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-blue/20"
            >
              Get Started
            </motion.button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                onInteraction();
              }}
              className="text-lg font-medium text-white/70"
            >
              {link.name}
            </a>
          ))}

          {user && (
             <div className="flex items-center gap-3 py-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <UserIcon className="w-5 h-5" />
                    )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{user.displayName || 'User'}</span>
                  <span className="text-xs text-white/40">{user.email}</span>
                </div>
             </div>
          )}

          <button
            onClick={() => {
              if (user) {
                handleLogout();
              } else {
                onInteraction();
              }
              setIsOpen(false);
            }}
            className="w-full py-4 btn-gradient text-white rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            {user ? (
              <>
                <LogOut className="w-5 h-5" /> Sign Out
              </>
            ) : (
              'Get Started'
            )}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
