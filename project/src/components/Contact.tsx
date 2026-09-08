import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle } from 'lucide-react';
import { Magnetic } from '../lib/anim';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const contactValue = (form.elements.namedItem('contact') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const text = `Нова заявка з сайту KRVTSV CORP%0AІм'я: ${encodeURIComponent(name)}%0AКонтакт: ${encodeURIComponent(contactValue)}%0AПовідомлення: ${encodeURIComponent(message)}`;
    const tgUrl = `https://t.me/holdingtokens?text=${text}`;

    try {
      window.open(tgUrl, '_blank', 'noopener,noreferrer');
    } catch {
      setError('Не вдалося відкрити Telegram. Напишіть нам вручну: @holdingtokens');
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-12 lg:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left max-w-[540px] w-full"
          >
            <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">
              КОНТАКТИ
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black uppercase leading-[0.9] tracking-tight text-gray-900 mb-6 md:mb-8">
              ДАВАЙ <span className="text-rose-500 whitespace-nowrap">ПОГОВОРИМО</span>
            </h2>

            <p className="text-gray-500 text-lg sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 break-words">
              Є ідея або вже знаєте, що потрібно? Напишіть — відповімо
              протягом кількох годин і почнемо роботу.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-sm mx-auto lg:mx-0">
              <a
                href="https://t.me/holdingtokens"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 md:px-6 md:py-5 border-2 border-transparent hover:border-rose-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-12 md:h-12 bg-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Send size={20} className="text-white" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-0.5">Telegram</p>
                  <p className="font-black text-base md:text-base text-gray-900 break-words">@holdingtokens</p>
                </div>
              </a>
              <a
                href="mailto:krvtsvcorp@gmail.com"
                className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 md:px-6 md:py-5 border-2 border-transparent hover:border-rose-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-12 md:h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-0.5">Email</p>
                  <p className="font-black text-base md:text-base text-gray-900 break-words">krvtsvcorp@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:pl-20 xl:pl-24"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 md:p-12 text-center border-2 border-rose-100"
              >
                <CheckCircle size={48} className="text-rose-500 mx-auto mb-4" />
                <h3 className="text-2xl md:text-2xl font-black uppercase text-gray-900 mb-3 break-words">
                  Заявка готова!
                </h3>
                <p className="text-gray-500 text-base sm:text-sm md:text-base break-words">
                  Telegram відкрився з попередньо заповненим повідомленням — залишилось натиснути «Надіслати». Якщо Telegram не відкрився, напишіть вручну: <span className="font-bold text-gray-900">@holdingtokens</span>.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="contact"
                className="bg-white rounded-3xl p-6 md:p-10 border-2 border-rose-100 space-y-4 md:space-y-5 shadow-xl shadow-rose-500/5 w-full"
              >

                <div>
                  <label className="block text-xs sm:text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Ім'я</label>
                  <input type="text" name="name" required
                    placeholder="Твоє ім'я"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 md:px-5 md:py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Telegram або email</label>
                  <input type="text" name="contact" required
                    placeholder="@username або email"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 md:px-5 md:py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Про проєкт</label>
                  <textarea name="message" rows={4} required
                    placeholder="Розкажи про свій проєкт..."
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 md:px-5 md:py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all resize-none text-base" />
                </div>

                {error && (
                  <p className="text-rose-500 text-sm font-bold text-center">{error}</p>
                )}

                <Magnetic strength={0.25} className="w-full">
                  <button type="submit" disabled={loading}
                    className="w-full bg-gray-900 text-white font-black uppercase tracking-widest text-sm sm:text-xs md:text-sm py-5 sm:py-4 rounded-full hover:bg-rose-500 transition-all duration-300 disabled:opacity-60 shadow-lg hover:shadow-rose-500/30 active:scale-95 hover:scale-[1.02]">
                    {loading ? 'Відправляємо...' : 'Відправити заявку'}
                  </button>
                </Magnetic>

                <p className="text-center text-xs text-gray-500 font-medium uppercase tracking-tighter break-words">
                  Або одразу в{' '}
                  <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="text-rose-500 font-bold hover:underline whitespace-nowrap">
                    Telegram
                  </a>
                  {' '}·{' '}
                  <a href="tel:+380935990741" className="text-rose-500 font-bold hover:underline whitespace-nowrap">
                    +380 93 599 0741
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
