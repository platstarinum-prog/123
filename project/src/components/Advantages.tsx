import { motion } from 'framer-motion';
import { DollarSign, Zap, MessageCircle, Palette, Smartphone } from 'lucide-react';

const items = [
  {
    icon: DollarSign, title: 'Прозорі ціни',
    desc: 'Фіксована вартість без прихованих доплат. Ви платите за роботу, а не за оренду офісу.',
    number: '01',
  },
  {
    icon: Zap, title: 'Швидкий запуск',
    desc: 'Лендінг за 3 дні, бізнес-сайт від 7 днів. Дедлайни дотримуємо — без затягувань.',
    number: '02',
  },
  {
    icon: MessageCircle, title: 'Прямий контакт',
    desc: 'Спілкуєтесь напряму з розробником. Жодних менеджерів, які переказують вимоги.',
    number: '03',
  },
  {
    icon: Palette, title: 'Унікальний дизайн',
    desc: 'Кожен проєкт створюється з нуля під ваш бізнес. Жодних типових шаблонів.',
    number: '04',
  },
  {
    icon: Smartphone, title: 'Адаптивність',
    desc: 'Ідеально виглядає на будь-якому пристрої: телефон, планшет, ноутбук, монітор.',
    number: '05',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center lg:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Чому ми</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-gray-900 break-words">
            П'ять причин <span className="text-gray-400">обрати нас</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-900/5 transition-all duration-300 h-full ${
                  i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 transition-colors">
                    <Icon size={22} className="text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-4xl font-bold text-gray-100 group-hover:text-gray-300 transition-colors leading-none">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
