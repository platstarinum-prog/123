import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Spotlight } from '../lib/anim';

const plans = [
  {
    name: 'Лендінг', price: 'від 3 000 грн', duration: '3–5 днів',
    desc: 'Односторінковий сайт для запуску реклами та збору заявок.',
    features: ['До 5 секцій', 'Адаптивна верстка', 'Форма заявки', 'Базова SEO', 'Хостинг та деплой'],
    highlighted: false,
  },
  {
    name: 'Бізнес-сайт', price: 'від 5 000 грн', duration: '7–14 днів',
    desc: 'Багатосторінковий сайт для компанії з усіма розділами.',
    features: ['До 10 сторінок', 'Унікальний дизайн', 'Зручна адмінпанель', 'SEO-оптимізація', 'Google Analytics', 'Деплой + домен'],
    highlighted: true,
  },
  {
    name: 'Інтернет-магазин', price: 'від 5 000 грн', duration: '14–21 день',
    desc: 'Повноцінний e-commerce з каталогом, кошиком та платіжною системою.',
    features: ['Каталог товарів', 'Кошик та оплата', 'Кабінет клієнта', 'Адмінпанель', 'Інтеграція з НП', 'Підтримка 1 міс.'],
    highlighted: false,
  },
  {
    name: 'Редизайн', price: 'від 2 000 грн', duration: '5–10 днів',
    desc: 'Оновлення застарілого сайту: сучасний дизайн, швидкість, конверсія.',
    features: ['Аудит поточного сайту', 'Новий дизайн', 'SEO без втрат', 'Оновлення коду', 'Тестування'],
    highlighted: false,
  },
];

export default function Prices() {
  return (
    <section id="prices" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center lg:text-left"
        >
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Вартість</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-gray-900 break-words">
            Прозорі<br />{' '}<span className="text-rose-500">ціни</span>
          </h2>
          <p className="text-gray-500 mt-6 text-base sm:text-sm md:text-lg max-w-lg mx-auto lg:mx-0 break-words">
            Фіксована вартість без прихованих доплат. Ціна, яку погодили — остаточна.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <Spotlight
              key={plan.name}
              className="rounded-3xl"
              from={plan.highlighted ? 'rgba(244,63,94,0.25)' : 'rgba(244,63,94,0.10)'}
              to="rgba(139,92,246,0.08)"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={plan.highlighted ? { y: -2 } : { y: -4 }}
                className={`relative rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 border-2 h-full ${
                  plan.highlighted
                    ? 'bg-gray-900 text-white border-gray-900 shadow-xl shadow-rose-500/10 scale-[1.02] md:scale-105 z-10'
                    : 'bg-white border-gray-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/10'
                }`}
              >
              {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-rose-600 to-red-500 text-white text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full whitespace-nowrap shadow-lg shadow-rose-500/30">
                    Популярний
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs sm:text-[10px] font-black uppercase tracking-[0.25em] mb-2 ${plan.highlighted ? 'text-rose-600' : 'text-rose-600'}`}>
                  {plan.duration}
                </p>
                <h3 className={`text-2xl md:text-2xl font-black uppercase tracking-wide mb-3 break-words ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-base sm:text-sm leading-relaxed break-words ${plan.highlighted ? 'text-gray-500' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <p className={`text-3xl sm:text-3xl md:text-4xl font-black break-words ${plan.highlighted ? 'text-rose-600' : 'text-gray-900'}`}>
                  {plan.price}
                </p>
              </div>

              <div className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-rose-600' : 'text-rose-500'}`} />
                    <p className={`text-base sm:text-sm font-medium leading-tight break-words ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{f}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/holdingtokens"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-black uppercase tracking-widest text-xs py-4 rounded-full transition-all duration-300 active:scale-95 ${
                  plan.highlighted
                    ? 'bg-rose-600 text-white hover:bg-rose-400'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                Замовити
              </a>
              </motion.div>
            </Spotlight>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-xs sm:text-[10px] mt-10 font-medium uppercase tracking-widest px-4 break-words"
        >
          Індивідуальні проєкти — обговорюємо ціну особисто в Telegram
        </motion.p>
      </div>
    </section>
  );
}
