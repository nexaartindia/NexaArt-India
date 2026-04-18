import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { handleFirestoreError } from '../lib/firebaseUtils';

interface AuthPopupProps {
  onClose: () => void;
}

export default function AuthPopup({ onClose }: AuthPopupProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (displayName) {
          await updateProfile(user, { displayName });
        }

        // Store user in Firestore
        try {
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: displayName || null,
            photoURL: user.photoURL || null,
            role: 'client',
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(),
          });
        } catch (fsError) {
          handleFirestoreError(fsError, 'create', `users/${user.uid}`);
        }
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        
        // Update last login
        if (auth.currentUser) {
           try {
              await setDoc(doc(db, 'users', auth.currentUser.uid), {
                lastLogin: serverTimestamp(),
              }, { merge: true });
            } catch (fsError) {
              // Non-blocking but logged
              console.error("Failed to update last login", fsError);
            }
        }
      }
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An authentication error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 100, opacity: 0, scale: 0.9 }}
      className="fixed inset-x-4 bottom-6 md:inset-auto md:bottom-24 md:right-10 z-[100] w-full max-w-sm"
    >
      <div className="bg-white rounded-[32px] p-8 shadow-2xl shadow-black/40 text-navy relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-[40px] rounded-full -translate-y-12 translate-x-12" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-1 text-navy/20 hover:text-navy transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold tracking-tight">
              {isSignUp ? 'Join NexaArt' : 'Welcome Back'}
            </h3>
            <p className="text-navy/50 text-sm font-medium">
              {isSignUp ? 'Start creating stunning AI visuals.' : 'Sign in to access your dashboard.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full bg-navy/5 border border-transparent focus:border-brand-purple/20 focus:bg-white rounded-xl px-11 py-3 text-sm transition-all outline-none"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            )}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-navy/5 border border-transparent focus:border-brand-purple/20 focus:bg-white rounded-xl px-11 py-3 text-sm transition-all outline-none"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30">
                <Mail className="w-4 h-4" />
              </div>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-navy/5 border border-transparent focus:border-brand-purple/20 focus:bg-white rounded-xl px-11 py-3 text-sm transition-all outline-none"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30">
                <Lock className="w-4 h-4" />
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2 text-red-500 text-xs bg-red-50 p-3 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3.5 btn-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="text-center mt-6">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-xs text-navy/40 font-semibold hover:text-navy transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up Free"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
