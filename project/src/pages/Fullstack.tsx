import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code2, Server, Check } from 'lucide-react';

export default function Fullstack() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Фуллстак розробка Україна — React + Node | KRVTSV CORP"
        description="Фуллстак розробка в Україні: фронтенд на React/Vite, бекенд на Node.js з REST/GraphQL API, бази даних і деплой. Замовити фуллстак проєкт у веб-розробника з Києва."
        path="/services/fullstack"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Фуллстак розробка</p>
            <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-black leading-[0.9] tracking-tight text-gray-900 uppercase mb-6 break-words">
              ФУЛЛСТАК<br />{' '}<span className="text-rose-500">РОЗРОБКА В УКРАЇНІ</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-base leading-relaxed max-w-2xl mb-8 break-words">
              Потрібен повноцінний продукт? Беремо весь цикл: фронтенд на React/Vite, бекенд на Node.js, бази даних, інтеграції та деплой. Один виконавець — менше комунікації та швидший запуск.
            </p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-rose-500 transition-colors">
              Замовити фуллстак проєкт
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><Code2 size={24} className="text-white" /></div>
              <h2 className="text-2xl font-black uppercase text-gray-900 mb-3">Frontend</h2>
              <p className="text-gray-500 leading-relaxed">React 18, Vite, Tailwind CSS, Framer Motion. Адаптивна верстка, швидкість LCP до 0.8 с, доступність відповідно до WCAG.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><Server size={24} className="text-white" /></div>
              <h2 className="text-2xl font-black uppercase text-gray-900 mb-3">Backend</h2>
              <p className="text-gray-500 leading-relaxed">Node.js, Express/NestJS, REST та GraphQL API, PostgreSQL/MongoDB, авторизація, хмарний деплой і CI/CD.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-8">Що входить у fullstack-проєкт</h2>
            <ul className="space-y-4">
              {[
                'Архітектура та проєктування бази даних',
                'React/Vite фронтенд з адаптивною версткою',
                'Node.js бекенд + REST/GraphQL API',
                'Інтеграції: платежі, CRM, Telegram-боти',
                'Деплой на Cloudflare + HTTPS',
                'Базова SEO-оптимізація та швидкість',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={20} className="text-rose-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">Потрібен fullstack-розробник?</h2>
            <p className="text-gray-400 mb-8">Напишіть у Telegram — обговоримо завдання, терміни та вартість. Запуск MVP від 7 днів.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-rose-500 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              Зв'язатися
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
