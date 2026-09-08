import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Zap, Smartphone, Search, Check } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Замовити лендінг — розробка landing page під ключ | KRVTSV CORP"
        description="Замовити лендінг у Києві та Україні. Розробка landing page на React/Vite від 3 000 грн, за 3-5 днів. Адаптивний дизайн, SEO, форма заявки. Прямий контакт з розробником."
        path="/services/landing"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Лендінг</p>
            <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-gray-900 mb-6 break-words">
              Замовити <span className="text-gray-400">лендінг</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-base leading-relaxed max-w-2xl mb-8 break-words">
              Односторінковий сайт для запуску реклами та збору заявок. Робимо на React/Vite — швидко, красиво, з адаптивом під телефони.
            </p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold text-sm px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors">
              Замовити лендінг
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5"><Zap size={22} className="text-gray-900" /></div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Швидкий запуск</h2>
              <p className="text-gray-500 leading-relaxed">Від 3 до 5 днів — і ваш лендінг вже в інтернеті. Жодних довгих узгоджень та затягувань.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5"><Smartphone size={22} className="text-gray-900" /></div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Адаптив</h2>
              <p className="text-gray-500 leading-relaxed">Ідеально виглядає на телефонах, планшетах і комп'ютерах. Жодної втрати якості.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5"><Search size={22} className="text-gray-900" /></div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">SEO-база</h2>
              <p className="text-gray-500 leading-relaxed">Мета-теги, Open Graph, швидкість 100/100, структуровані дані. Google любить такі сайти.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Що входить</h2>
            <ul className="space-y-4">
              {[
                'Унікальний дизайн під ваш бренд',
                'Адаптивна верстка (mobile first)',
                'Форма заявки / зворотного зв\'язку',
                'Базова SEO-оптимізація',
                'Підключення аналітики (Google Analytics)',
                'Open Graph для соцмереж',
                'Хостинг на Cloudflare (швидко та безпечно)',
                'Домен у зоні .com.ua / .pp.ua',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-500">Ціна — <span className="text-gray-900 font-bold">від 3 000 грн</span>, термін — від 3 днів.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Для кого підходить лендінг</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Новий бізнес', desc: 'Тільки стартуєте і хочете швидко отримати перших клієнтів?' },
                { title: 'Рекламна кампанія', desc: 'Запускаєте Google Ads або Facebook — лендінг дає найвищу конверсію.' },
                { title: 'Тест гіпотези', desc: 'Перевіряєте нішу без великих вкладень? Лендінг — найдешевший спосіб.' },
                { title: 'Подія / акція', desc: 'Анонс заходу, розпродаж або збір заявок на безкоштовну консультацію.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Готові запустити лендінг?</h2>
            <p className="text-gray-400 mb-8">Напишіть у Telegram — обговоримо задачу, ціну та терміни. Без зобов'язань.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-sm px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors">
              Зв'язатися
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}