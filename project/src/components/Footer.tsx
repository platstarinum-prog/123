import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <Link to="/" className="text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap">
            KRVTSV<span className="text-gray-500"> CORP</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {[
              { label: 'Переваги', href: '/#advantages' },
              { label: 'Проєкти', href: '/#project' },
              { label: 'Ціни', href: '/#prices' },
              { label: 'Контакти', href: '/#contact' },
            ].map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-white transition-colors whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-white transition-colors whitespace-nowrap">
              Telegram
            </a>
            <a href="mailto:krvtsvcorp@gmail.com" className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-white transition-colors whitespace-nowrap">
              Email
            </a>
          </div>

          <p className="text-gray-600 text-[10px] sm:text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
            &copy; {new Date().getFullYear()} KRVTSV CORP
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
