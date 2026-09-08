import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Code2, Smartphone, Check } from 'lucide-react';

export default function WebDeveloperKyiv() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Веб-розробник Київ — замовити лендінг та сайт | KRVTSV CORP"
        description="Веб-розробник у Києві: замовити лендінг, бізнес-сайт, інтернет-магазин або фуллстак проєкт. KRVTSV CORP працює з клієнтами з Києва та всієї України. Запуск від 3 днів."
        path="/services/web-developer-kyiv"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Веб-розробник Київ</p>
            <h1 className="text-[clamp(2.2rem,8vw,5rem)] font-black leading-[0.95] tracking-tight text-gray-900 uppercase mb-6 break-words">
              ВЕБ-РОЗРОБНИК<br />{' '}<span className="text-rose-500">У КИЄВІ</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-base leading-relaxed max-w-2xl mb-8 break-words">
              Шукаєте веб-розробника в Києві? KRVTSV CORP створює сайти від лендінгу до фуллстак-продукту. Працюємо з клієнтами по всій Україні — онлайн, без зайвих зустрічей.
            </p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-rose-500 transition-colors">
              Замовити сайт
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><MapPin size={24} className="text-white" /></div>
              <h2 className="text-xl font-black uppercase text-gray-900 mb-3">Локально в Києві</h2>
              <p className="text-gray-500 leading-relaxed">Знаємо ринок Києва та України. Швидкий зв'язок у Telegram, зручна комунікація в часовому поясі Києва.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><Code2 size={24} className="text-white" /></div>
              <h2 className="text-xl font-black uppercase text-gray-900 mb-3">Сучасний стек</h2>
              <p className="text-gray-500 leading-relaxed">React, Vite, Tailwind, Node.js. Висока швидкість завантаження, високі показники Lighthouse, SEO-оптимізація.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><Smartphone size={24} className="text-white" /></div>
              <h2 className="text-xl font-black uppercase text-gray-900 mb-3">Адаптивність</h2>
              <p className="text-gray-500 leading-relaxed">Ідеально виглядає на iPhone та Android. Мобільна версія — пріоритет, а не доповнення.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-8">Послуги веб-розробника в Києві</h2>
            <ul className="space-y-4">
              {[
                'Лендінги під ключ (від 3 днів)',
                'Бізнес-сайти та корпоративні портали',
                'Інтернет-магазини (e-commerce)',
                'Фуллстак розробка: React + Node.js',
                'Редизайн та оптимізація швидкості',
                'Базова та повна SEO-оптимізація',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={20} className="text-rose-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-500">Ціни — від <span className="text-rose-600 font-black">4000 грн</span>. Пишіть у Telegram, відповідаємо за кілька годин.</p>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">Веб-розробник у Києві</h2>
            <p className="text-gray-400 mb-8">Київ та вся Україна — замовте сайт у надійній веб-студії.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services/fullstack" className="inline-flex items-center gap-2 bg-rose-500 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                Фуллстак
              </Link>
              <Link to="/services/ecommerce" className="inline-flex items-center gap-2 border-2 border-white text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                Магазин
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
