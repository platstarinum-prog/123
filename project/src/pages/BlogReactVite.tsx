import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogReactVite() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Чому я роблю сайти на React + Vite, а не на WordPress | KRVTSV CORP"
        description="Чому я використовую React + Vite для сайтів, а не WordPress або Tilda. Пояснюю переваги: швидкість, SEO, зручність. Досвід веб-розробника."
        path="/blog/react-vite"
        ogType="article"
      />
      <Header />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Гайд · 28 квітня 2026</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6 break-words">
            Чому я роблю сайти на React + Vite, а не на WordPress
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Мені часто кажуть: «А чому не WordPress? Він же безкоштовний, там плагінів купа». Розкажу, чому я вибрав React + Vite і чому цей стек реально краще для бізнесу.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Швидкість — це гроші</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Сайт на Vite завантажується за 0.8–1.5 секунди. WordPress з плагінами — 3–5 секунд. Кожна секунда затримки зменшує конверсію на 7%. Порахуй сам, скільки тобі коштує повільний сайт.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. SEO без головного болю</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            React-сайти можна пререндерити — Google отримує готовий HTML одразу, без виконання JavaScript. Цей сайт саме так і працює: контент потрапляє в індекс моментально. На WordPress для цього треба танці з бубном і платні плагіни.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. WordPress vs React: чесно</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            WordPress — норм, якщо треба блог або простий сайт, який ти будеш сам наповнювати. Але він повільний, вимагає постійних оновлень і часто ламається від плагінів. React/Vite — для тих, кому потрібна продуктивність і надійність.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. А якщо потрібен fullstack?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Якщо тобі потрібен не тільки сайт, а й бекенд з базою даних — React + Node.js робить це в рамках одного стеку. Дивись сторінку <Link to="/services/fullstack" className="text-rose-600 font-bold hover:underline">fullstack-розробки</Link>. Для магазину — <Link to="/services/ecommerce" className="text-rose-600 font-bold hover:underline">розробка інтернет-магазину</Link>.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Потрібен сайт на React?</h3>
            <p className="text-gray-500 mb-6">Замов лендінг або бізнес-сайт — обговоримо в Telegram.</p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-rose-600 transition-colors">
              Написати нам
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
