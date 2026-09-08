import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Вартість</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-gray-900 break-words">
            Прозорі <span className="text-gray-400">ціни</span>
          </h2>
          <p className="text-gray-500 mt-6 text-base sm:text-sm md:text-lg max-w-lg mx-auto lg:mx-0 break-words">
            Фіксована вартість без прихованих доплат. Ціна, яку погодили — остаточна.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl p-6 md:p-8 flex flex-col transition-all duration-300 border h-full ${
                plan.highlighted
                  ? 'bg-gray-900 text-white border-gray-900 shadow-xl scale-[1.02] md:scale-105 z-10'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-900/5'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-6">
                  <span className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded whitespace-nowrap border border-gray-700">
                    Популярний
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-2">
                  {plan.duration}
                </p>
                <h3 className={`text-2xl font-bold tracking-tight mb-3 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-base leading-relaxed ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <p className={`text-3xl md:text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </p>
              </div>

              <div className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-gray-400' : 'text-gray-400'}`} />
                    <p className={`text-base font-medium leading-tight ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{f}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/holdingtokens"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-bold uppercase tracking-widest text-xs py-3.5 rounded-lg transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white text-gray-900 hover:bg-gray-200'
                    : 'bg-gray-900 text-white hover:bg-gray-700'
                }`}
              >
                Замовити
              </a>
            </motion.div>
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
