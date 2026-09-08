import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Spotlight } from '../lib/anim';

const faqs = [
  {
    q: 'Скільки коштує створити сайт?',
    a: 'Лендінг — від 3 000 грн, бізнес-сайт — від 5 000 грн, інтернет-магазин — від 5 000 грн, редизайн — від 2 000 грн. Ціна фіксована, без прихованих доплат.',
  },
  {
    q: 'За скільки часу ви робите лендінг?',
    a: 'Лендінг запускаємо за 3–5 днів, бізнес-сайт — за 7–14 днів. Дотримуємо дедлайнів без затягувань.',
  },
  {
    q: 'Як замовити сайт у Києві?',
    a: 'Напишіть у Telegram @holdingtokens або на пошту krvtsvcorp@gmail.com. Працюємо з клієнтами по всій Україні — обговоримо завдання, узгодимо деталі та одразу почнемо роботу.',
  },
  {
    q: 'Чи робите ви адаптивну верстку під мобільні?',
    a: 'Так. Кожен сайт коректно відображається на всіх пристроях: телефонах, планшетах, ноутбуках та моніторах.',
  },
  {
    q: 'На якому стеку ви розробляєте?',
    a: 'Використовуємо React, Vite, Tailwind CSS та Framer Motion. Це забезпечує високу швидкість завантаження, чистий код та просту підтримку.',
  },
  {
    q: 'Чи допомагаєте з SEO?',
    a: 'Так. SEO-оптимізація входить у пакети бізнес-сайту та інтернет-магазину: метатеги, мікророзмітка, швидкість, карта сайту та індексація в Google.',
  },
  {
    q: 'Що таке фуллстак розробка?',
    a: 'Повний цикл створення продукту: фронтенд на React/Vite, бекенд на Node.js (REST або GraphQL API), база даних, авторизація, інтеграції з платіжними системами, CRM та деплой.',
  },
  {
    q: 'Скільки коштує інтернет-магазин?',
    a: 'Від 5 000 грн, термін — від 14 днів. Включає каталог з фільтрами, кошик, оплату (WayForPay, LiqPay, Stripe), адмінпанель та базову SEO-оптимізацію.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">FAQ</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] text-gray-900 break-words">
            Питання<br />{' '}<span className="text-rose-500">та відповіді</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Spotlight key={item.q} className="rounded-3xl" from="rgba(244,63,94,0.10)" to="rgba(139,92,246,0.06)">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-3xl border-2 transition-colors ${isOpen ? 'border-rose-200 bg-rose-50/40' : 'border-gray-100 bg-white'}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 md:px-8 py-5 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-black uppercase tracking-wide text-gray-900 text-base sm:text-lg break-words">{item.q}</span>
                    <span className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${isOpen ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 md:px-8 pb-6 md:pb-7 text-gray-500 leading-relaxed text-sm sm:text-base break-words">
                      {item.a}
                    </p>
                  )}
                </motion.div>
              </Spotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}
