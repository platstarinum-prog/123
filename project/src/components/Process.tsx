import { motion } from 'framer-motion';
import { Send, MessageSquare, Code2, Rocket } from 'lucide-react';
import { Spotlight, Magnetic } from '../lib/anim';

const steps = [
  {
    icon: Send, number: '01', title: 'Telegram',
    desc: 'Надсилайте завдання в Telegram — розкажіть про проєкт, бюджет та бажані терміни.',
    link: { label: 'Написати', href: 'https://t.me/holdingtokens' },
  },
  {
    icon: MessageSquare, number: '02', title: 'Бриф і прототип',
    desc: 'Узгоджуємо структуру, дизайн, функціонал та дедлайни. Фіксуємо все письмово.',
    link: null,
  },
  {
    icon: Code2, number: '03', title: 'Розробка',
    desc: 'Створюємо сайт, тестуємо, показуємо проміжні результати. Жодних сюрпризів на фініші.',
    link: null,
  },
  {
    icon: Rocket, number: '04', title: 'Запуск',
    desc: 'Деплоїмо на ваш домен, налаштовуємо аналітику та передаємо доступ. Ви повністю готові до роботи.',
    link: null,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20"
        >
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Як ми працюємо</p>
          <h2 className="text-[clamp(2.5rem,9vw,5rem)] font-black uppercase leading-tight text-white break-words">
            ПРОЦЕС<br />{' '}<span className="text-rose-500">БЕЗ МАГІЇ</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-sm md:text-lg max-w-lg break-words">
            4 кроки від першого повідомлення до готового сайту в інтернеті.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-rose-900 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Spotlight key={step.number} className="rounded-3xl" from="rgba(244,63,94,0.20)" to="rgba(139,92,246,0.10)">
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative z-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 hover:from-gray-750 transition-all group border border-gray-700 h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Magnetic strength={0.4}>
                      <div className="w-12 h-12 sm:w-12 sm:h-12 bg-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={22} className="text-white" />
                      </div>
                    </Magnetic>
                    <span className="text-4xl sm:text-4xl font-black text-gray-700">{step.number}</span>
                  </div>
                  <h3 className="text-xl sm:text-xl font-black uppercase tracking-wide text-white mb-3 break-words">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-base sm:text-sm break-words">{step.desc}</p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-rose-600 font-black text-sm uppercase tracking-widest hover:text-rose-500 transition-colors whitespace-nowrap"
                    >
                      {step.link.label} →
                    </a>
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
