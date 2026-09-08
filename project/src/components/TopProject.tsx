import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Tilt } from '../lib/anim';

type Case = {
  name: string;
  type: string;
  img: string;
  category: string;
  year: string;
  duration: string;
  price: string;
  desc: string;
  tech: string[];
  results: string[];
  url: string;
};

const FALLBACK = (label: string) =>
  `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 fill=%22%23f1f5f9%22%3E%3Crect width=%22800%22 height=%22500%22/%3E%3Ctext x=%22400%22 y=%22250%22 text-anchor=%22middle%22 fill=%22%2394a3b8%22 font-family=%22sans-serif%22 font-size=%2224%22%3E${encodeURIComponent(label)}%3C/text%3E%3C/svg%3E`;

const cases: Case[] = [
  {
    name: 'Autostandart',
    type: 'СТО · автосервіс у Києві',
    img: '/images/case-autostandart.jpg',
    category: 'Лендінг',
    year: '2026',
    duration: '5 днів',
    price: 'від 4 000 грн',
    desc: 'Сайт автосервісу з фіксацією цін, послугами та формою запису. Швидкий запуск і максимум заявок із Google.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    results: [
      'Зрозуміла структура послуг та цін',
      'Форма запису на ремонт',
      'SEO: локальний пошук у Києві',
      'Завантаження менше 1 с',
    ],
    url: 'https://autostandart.org',
  },
  {
    name: 'Buksy',
    type: 'Інтернет-магазин одягу',
    img: '/images/case-buksy.jpg',
    category: 'E-commerce',
    year: '2026',
    duration: '18 днів',
    price: 'від 5 000 грн',
    desc: 'Магазин dark-luxury стритвіру: каталог, кошик, оплата та адмінпанель. Атмосферний дизайн під бренд.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    results: [
      'Каталог + фільтри та пошук',
      'Кошик та платіжна система',
      'Адмінпанель для товарів',
      'TypeScript на фронті та бекенді',
    ],
    url: 'https://buksy.shop',
  },
  {
    name: 'PM Livoberezhniy',
    type: 'Перманентний макіяж',
    img: '/images/case-pm.jpg',
    category: 'Лендінг',
    year: '2026',
    duration: '4 дні',
    price: 'від 3 000 грн',
    desc: 'Лендінг майстра перманентного макіяжу: портфоліо робіт, ціни та запис. Довіра та конверсія на першому екрані.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    results: [
      'Портфоліо робіт + відгуки',
      'Форма запису на процедуру',
      'Локальне SEO по Києву',
      'Повний адаптив',
    ],
    url: 'https://pm-livoberezhniy.art',
  },
  {
    name: 'Angelina Tarot',
    type: 'Онлайн-гадання · таролог',
    img: '/images/case-angelina.jpg',
    category: 'Лендінг',
    year: '2026',
    duration: '5 днів',
    price: 'від 4 000 грн',
    desc: 'Лендінг таролога з онлайн-записом на сеанси, відгуками та містичною візуальною подачею.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    results: [
      'Онлайн-запис на консультацію',
      'Блок відгуків та довіри',
      'Атмосферний унікальний дизайн',
      'Швидкість до 1 с',
    ],
    url: 'https://angelina-taro.me',
  },
  {
    name: 'Lyzeum 167',
    type: 'Школа у Києві',
    img: '/images/case-school.jpg',
    category: 'Освіта / Соцпроєкт',
    year: '2026',
    duration: '2 тижні',
    price: 'від 3 000 грн',
    desc: 'Оновили шкільний портал: перевели на React/Vite, додали адаптив, новини та розклад у реальному часі.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    results: [
      'Перехід зі статики на React/Vite',
      'Адаптив під телефони учнів',
      'Новини та розклад он-лайн',
      'Cloudflare — безпека + швидкість',
    ],
    url: 'https://lizei167.pages.dev',
  },
  {
    name: '5 AM',
    type: 'Бренд-лендінг',
    img: '/images/case-landing.jpg',
    category: 'Лендінг',
    year: '2026',
    duration: '4 дні',
    price: 'від 3 000 грн',
    desc: 'Стильний лендінг для бренду: мінімалістичний дизайн, висока швидкість, адаптив під будь-який екран.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    results: [
      'Унікальний дизайн під бренд',
      'Швидкість завантаження до 1 с',
      'Повний адаптив',
      'Анімації на Framer Motion',
    ],
    url: 'https://5-am.pages.dev',
  },
];

function CaseCard({ item, i }: { item: Case; i: number }) {
  const imgRef = useRef<HTMLImageElement>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col"
    >
      <div className="relative bg-gray-900">
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 bg-gray-700 rounded-full text-[10px] sm:text-xs text-gray-400 px-4 py-1 ml-2 font-mono truncate">
            {item.url.replace('https://', '')}
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
          <picture>
            <source srcSet={item.img.replace(/\.(jpe?g|png)$/, '.avif')} type="image/avif" />
            <source srcSet={item.img.replace(/\.(jpe?g|png)$/, '.webp')} type="image/webp" />
            <img
              ref={imgRef}
              src={item.img}
              alt={`${item.name} — ${item.type}`}
              width={800}
              height={500}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding="async"
              className="w-full h-full object-cover"
              onError={() => {
                if (imgRef.current && !imgRef.current.src.startsWith('data:')) {
                  imgRef.current.src = FALLBACK(item.name);
                }
              }}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <p className="text-white font-black text-xl sm:text-2xl uppercase break-words">{item.name}</p>
            <p className="text-rose-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">{item.type}</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[10px] sm:text-xs font-black uppercase text-rose-700 bg-rose-100 px-3 py-1 rounded-full whitespace-nowrap">{item.category}</span>
          <span className="text-[10px] sm:text-xs font-black uppercase text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">{item.year}</span>
        </div>

        <p className="text-gray-500 leading-relaxed text-sm sm:text-base mb-5 break-words">{item.desc}</p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gray-50 rounded-2xl px-4 py-3">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Термін</p>
            <p className="text-gray-900 font-black text-sm sm:text-base">{item.duration}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl px-4 py-3">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Ціна</p>
            <p className="text-gray-900 font-black text-sm sm:text-base">{item.price}</p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Що зробили</p>
          <div className="space-y-2">
            {item.results.map((r) => (
              <div key={r} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-rose-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 font-medium text-xs sm:text-sm break-words">{r}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {item.tech.map((t) => (
            <span key={t} className="text-[10px] sm:text-xs font-bold bg-white border-2 border-gray-100 px-3 py-1 rounded-full whitespace-nowrap">{t}</span>
          ))}
        </div>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-black uppercase text-xs sm:text-sm px-6 py-4 rounded-full hover:bg-rose-500 transition-colors whitespace-nowrap"
        >
          <ExternalLink size={16} className="flex-shrink-0" />
          Відкрити проєкт
        </a>
      </div>
    </motion.div>
  );
}

export default function TopProject() {
  return (
    <section id="project" className="py-16 sm:py-24 bg-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Портфоліо</p>
          <h2 className="text-[clamp(2rem,7vw,5rem)] font-black uppercase leading-tight text-gray-900 break-words">
            НАШІ<br />{' '}<span className="text-rose-500">ПРОЄКТИ</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-sm md:text-lg max-w-xl break-words">
            Реальні роботи з реальними термінами та цінами. Без постановки.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch [perspective:1200px]">
          {cases.map((item, i) => (
            <Tilt key={item.name} className="h-full" max={12}>
              <CaseCard item={item} i={i} />
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
