import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShoppingCart, CreditCard, Truck, Check } from 'lucide-react';

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Розробка e-commerce сайтів — інтернет-магазин під ключ | KRVTSV CORP"
        description="Розробка e-commerce сайтів під ключ: кошик, каталог, фільтри, оплата (WayForPay/LiqPay/Stripe), адмінка та інтеграція з Nova Poshta. Ціна від 5 000 грн, запуск від 14 днів."
        path="/services/ecommerce"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">E-commerce</p>
            <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-black leading-[0.9] tracking-tight text-gray-900 uppercase mb-6 break-words">
              РОЗРОБКА<br />{' '}<span className="text-rose-500">E-COMMERCE САЙТІВ</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-base leading-relaxed max-w-2xl mb-8 break-words">
              Створюємо інтернет-магазини, які реально продають: каталог, зручний кошик, безпечні платежі та інтеграція з доставкою. Від простого магазину до масштабованої платформи.
            </p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-rose-500 transition-colors">
              Замовити магазин
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><ShoppingCart size={24} className="text-white" /></div>
              <h2 className="text-xl font-black uppercase text-gray-900 mb-3">Каталог і кошик</h2>
              <p className="text-gray-500 leading-relaxed">Категорії, фільтри, пошук, кошик та оформлення замовлення. Зручно працювати з телефона.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><CreditCard size={24} className="text-white" /></div>
              <h2 className="text-xl font-black uppercase text-gray-900 mb-3">Оплата</h2>
              <p className="text-gray-500 leading-relaxed">WayForPay, LiqPay, Stripe, Mono. Безпечні транзакції та фіскалізація.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-5"><Truck size={24} className="text-white" /></div>
              <h2 className="text-xl font-black uppercase text-gray-900 mb-3">Доставка</h2>
              <p className="text-gray-500 leading-relaxed">Інтеграція з Nova Poshta, Укрпошта, розрахунок вартості та трекінг.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-8">Що входить у розробку магазину</h2>
            <ul className="space-y-4">
              {[
                'Каталог товарів з фільтрами та пошуком',
                'Кошик та оформлення замовлення',
                'Оплата: WayForPay / LiqPay / Stripe',
                'Адмінка для товарів і замовлень',
                'Інтеграція з CRM та телеграм-ботом',
                'Базова SEO-оптимізація та швидкість',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={20} className="text-rose-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-500">Ціна — <span className="text-rose-600 font-black">від 5 000 грн</span>, термін — від 14 днів.</p>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">Запустіть свій магазин</h2>
            <p className="text-gray-400 mb-8">Напишіть у Telegram — розрахуємо вартість і терміни під ваш асортимент.</p>
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
