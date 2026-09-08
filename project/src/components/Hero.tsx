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
            className="w-[600px] h-[600px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-full blur-3xl opacity-60"
          />
        </Parallax>
        <Parallax amount={-60} className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px]">
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[500px] h-[500px] bg-gradient-to-tr from-gray-300 to-gray-200 rounded-full blur-3xl opacity-50"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.6)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="min-w-0">
            <div className="mb-4 hero-rise" style={{ animationDelay: '0ms' }}>
              <span className="inline-block text-xs sm:text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-700 bg-white/70 backdrop-blur border border-gray-200 px-4 sm:px-4 py-3 sm:py-2 rounded-full shadow-sm">
                Веб-студія в Києві / Ukraine
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-black leading-[0.95] tracking-tight text-gray-900 uppercase mb-4 break-words hero-rise" style={{ animationDelay: '80ms' }}>
              САЙТИ, ЯКІ<br />
              <span className="text-gray-400">ПРОДАЮТЬ</span>
            </h1>

            <div className="mt-6 mb-4 hero-rise" style={{ animationDelay: '160ms' }}>
              <p className="text-[clamp(1rem,4vw,1.4rem)] font-bold uppercase tracking-wide text-gray-500 break-words">
                ШВИДКО. СУЧАСНО. РЕЗУЛЬТАТИВНО.
              </p>
              <p className="text-[clamp(1rem,4vw,1.4rem)] font-black uppercase tracking-wide text-gray-900 break-words">
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
                  className="group inline-flex items-center gap-2 bg-gray-900 text-white font-semibold uppercase tracking-widest text-sm sm:text-xs px-8 sm:px-8 py-5 sm:py-4 rounded-full hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap shadow-lg"
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
                  className="group inline-flex items-center gap-2 border border-gray-300 text-gray-900 font-semibold uppercase tracking-widest text-sm sm:text-xs px-8 sm:px-8 py-5 sm:py-4 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-300 whitespace-nowrap"
                >
                  <Send size={18} className="flex-shrink-0" />
                  Telegram
                </a>
              </Magnetic>
            </div>

            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 hero-rise" style={{ animationDelay: '400ms' }}>
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-gray-900">6+</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-500 font-semibold whitespace-nowrap">Проєкти</p>
              </div>
              <div className="w-px h-10 sm:h-10 bg-gray-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-gray-900">від 3 днів</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-500 font-semibold whitespace-nowrap">Мін. термін</p>
              </div>
              <div className="w-px h-10 sm:h-10 bg-gray-200 flex-shrink-0" />
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
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 rounded-3xl opacity-30 blur-xl" />
              <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden shadow-2xl shadow-gray-900/10">
                <div className="space-y-4">
                  {[
                    { name: 'Landing Page', meta: 'від 3 днів' },
                    { name: 'Бізнес-сайт', meta: 'від 5 днів' },
                    { name: 'Інтернет-магазин', meta: 'від 7 днів' },
                    { name: 'Редизайн', meta: 'від 2 днів' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-gray-900" />
                      </div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <div className="ml-auto text-xs font-semibold text-gray-500 whitespace-nowrap">
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
                  className="mt-8 bg-gray-900 rounded-xl px-6 py-5 text-white"
                >
                  <p className="text-sm sm:text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Наш підхід</p>
                  <p className="font-bold text-lg leading-tight">Прямий контакт з розробником. Без посередників. Без зайвих витрат.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
