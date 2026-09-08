import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { Magnetic, Parallax } from '../lib/anim';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Parallax amount={80} className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px]">
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[600px] h-[600px] bg-gradient-to-br from-rose-300 to-pink-200 rounded-full blur-3xl opacity-60"
          />
        </Parallax>
        <Parallax amount={-60} className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px]">
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[500px] h-[500px] bg-gradient-to-tr from-rose-200 to-red-200 rounded-full blur-3xl opacity-50"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.6)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="min-w-0">
            <div className="mb-4 hero-rise" style={{ animationDelay: '0ms' }}>
              <span className="inline-block text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 bg-white/70 backdrop-blur border border-rose-100 px-4 sm:px-4 py-3 sm:py-2 rounded-full shadow-sm">
                Веб-студія в Києві / Ukraine
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-black leading-[0.95] tracking-tight text-gray-900 uppercase mb-4 break-words hero-rise" style={{ animationDelay: '80ms' }}>
              САЙТИ, ЯКІ<br />
              <span className="text-rose-500">ПРОДАЮТЬ</span>
            </h1>

            <div className="mt-6 mb-4 hero-rise" style={{ animationDelay: '160ms' }}>
              <p className="text-[clamp(1rem,4vw,1.4rem)] font-bold uppercase tracking-wide text-gray-500 break-words">
                ШВИДКО. СУЧАСНО. РЕЗУЛЬТАТИВНО.
              </p>
              <p className="text-[clamp(1rem,4vw,1.4rem)] font-black uppercase tracking-wide text-rose-600 break-words">
                БЕЗ ПЕРЕПЛАТ
              </p>
            </div>

            <p className="text-gray-500 text-lg sm:text-base leading-relaxed max-w-md mb-10 break-words hero-rise" style={{ animationDelay: '240ms' }}>
              Створюємо сайти, які приносять заявки та клієнтів. Жодних шаблонів — тільки унікальні рішення під ваш бізнес.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 hero-rise" style={{ animationDelay: '320ms' }}>
              <Magnetic strength={0.4}>
                <a
                  href="#project"
                  className="group inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm sm:text-xs px-8 sm:px-8 py-5 sm:py-4 rounded-full hover:bg-rose-500 transition-colors duration-300 whitespace-nowrap shadow-lg shadow-rose-500/20"
                >
                  ТОП ПРОЄКТ
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href="https://t.me/holdingtokens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 font-black uppercase tracking-widest text-sm sm:text-xs px-8 sm:px-8 py-5 sm:py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  <Send size={18} className="flex-shrink-0" />
                  Telegram
                </a>
              </Magnetic>
            </div>

            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 hero-rise" style={{ animationDelay: '400ms' }}>
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-rose-500">6+</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-500 font-semibold whitespace-nowrap">Проєкти</p>
              </div>
              <div className="w-px h-10 sm:h-10 bg-rose-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-gray-900">від 3 днів</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-500 font-semibold whitespace-nowrap">Мін. термін</p>
              </div>
              <div className="w-px h-10 sm:h-10 bg-rose-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-gray-900">0.8s</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-500 font-semibold whitespace-nowrap">Завантаження</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
            className="hidden lg:block"
          >
            <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-rose-400 to-red-500 rounded-3xl opacity-20 blur-xl" />
              <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-8 lg:p-10 overflow-hidden shadow-2xl shadow-rose-500/10">
                <div className="space-y-4">
                  {[
                    { name: 'Landing Page', meta: 'від 3 днів', tint: 'from-rose-500 to-pink-500' },
                    { name: 'Бізнес-сайт', meta: 'від 5 днів', tint: 'from-rose-600 to-red-500' },
                    { name: 'Інтернет-магазин', meta: 'від 7 днів', tint: 'from-amber-500 to-orange-500' },
                    { name: 'Редизайн', meta: 'від 2 днів', tint: 'from-emerald-500 to-teal-500' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.03, x: 6 }}
                      className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm cursor-default"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.tint} flex items-center justify-center`}>
                        <span className="w-3 h-3 rounded-full bg-white/90" />
                      </div>
                      <p className="font-black text-gray-900 uppercase tracking-wide">{item.name}</p>
                      <div className="ml-auto text-xs font-bold text-rose-600 uppercase tracking-widest whitespace-nowrap">
                        {item.meta}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-8 bg-gradient-to-r from-gray-900 to-rose-900 rounded-2xl px-6 py-5 text-white"
                >
                  <p className="text-sm sm:text-xs uppercase tracking-widest text-rose-400 font-bold mb-1">Наш підхід</p>
                  <p className="font-black text-lg leading-tight">Прямий контакт з розробником. Без посередників. Без зайвих витрат.</p>
                </motion.div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-400 to-red-500 rounded-full opacity-30 blur-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
