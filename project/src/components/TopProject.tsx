import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Coins } from 'lucide-react';

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

function CaseCard({ item }: { item: Case }) {
  const imgRef = useRef<HTMLImageElement>(null);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-500 flex flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <picture>
            <source srcSet={item.img.replace(/\.(jpe?g|png)$/, '.avif')} type="image/avif" />
            <source srcSet={item.img.replace(/\.(jpe?g|png)$/, '.webp')} type="image/webp" />
            <img
              ref={imgRef}
              src={item.img}
              alt={`${item.name} — ${item.type}`}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              onError={() => {
                if (imgRef.current && !imgRef.current.src.startsWith('data:')) {
                  imgRef.current.src = FALLBACK(item.name);
                }
              }}
            />
          </picture>
        </div>

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur border border-gray-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
            {item.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur border border-gray-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
            {item.year}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm font-medium text-gray-500 mb-4">{item.type}</p>

        <p className="text-sm leading-relaxed text-gray-600 mb-5">{item.desc}</p>

        <div className="flex items-center gap-5 mb-5 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-gray-400" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Термін</p>
              <p className="text-sm font-bold text-gray-900">{item.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Coins size={16} className="text-gray-400" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Бюджет</p>
              <p className="text-sm font-bold text-gray-900">{item.price}</p>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Результат</p>
          <div className="space-y-2">
            {item.results.map((r) => (
              <div key={r} className="flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full bg-gray-900 flex-shrink-0" />
                <p className="text-sm text-gray-700">{r}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {item.tech.map((t) => (
            <span key={t} className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded">{t}</span>
          ))}
        </div>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 font-semibold text-sm px-5 py-3.5 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-300"
        >
          Відкрити сайт
          <ArrowUpRight size={16} className="flex-shrink-0" />
        </a>
      </div>
    </motion.article>
  );
}

export default function TopProject() {
  return (
    <section id="project" className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Портфоліо</p>
          <h2 className="text-[clamp(2rem,7vw,4.5rem)] font-bold tracking-tight leading-tight text-gray-900 break-words">
            Реалізовані <span className="text-gray-400">проєкти</span>
          </h2>
          <p className="text-gray-500 mt-5 text-base sm:text-lg leading-relaxed break-words">
            Шість робіт з різних ніш: від локального автосервісу до dark-luxury магазину одягу. Кожен — з нуля, під задачу та бізнес клієнта.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cases.map((item) => (
            <CaseCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
