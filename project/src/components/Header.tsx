import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ScrollProgress } from '../lib/anim';
import NavLink from './NavLink';

const links = [
  { label: 'Переваги', href: '/#advantages' },
  { label: 'Проєкти', href: '/#project' },
  { label: 'Ціни', href: '/#prices' },
  { label: 'Контакти', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
    <ScrollProgress />
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || open ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-black tracking-tighter text-gray-900 hover:text-rose-500 transition-colors z-[110] whitespace-nowrap">
          KRVTSV<span className="text-rose-500"> CORP</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-rose-500 transition-colors whitespace-nowrap"
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="https://t.me/holdingtokens"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg shadow-rose-500/20 whitespace-nowrap"
          >
            Telegram
          </a>
        </nav>

        <button
          className="md:hidden text-gray-900 z-[110] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[100] md:hidden flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col gap-8 text-center w-full max-w-xs mx-auto">
              {links.map((l, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={l.href}
                >
                  <NavLink
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-gray-900 hover:text-rose-500 transition-colors break-words"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="https://t.me/holdingtokens"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-rose-600 text-white text-base sm:text-lg font-black uppercase tracking-widest px-8 py-5 rounded-full shadow-xl shadow-rose-500/30 whitespace-nowrap"
              >
                Написати нам
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
