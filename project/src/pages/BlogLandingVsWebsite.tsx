import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogLandingVsWebsite() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Лендінг чи сайт: шо краще для бізнесу? | KRVTSV CORP"
        description="Лендінг чи повноцінний сайт — що обрати? Порівнюю ціну, терміни, конверсію. Коли лендінг працює, а коли потрібен магазин. Досвід веб-розробника."
        path="/blog/landing-vs-website"
        ogType="article"
      />
      <Header />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Вибір · 10 квітня 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6 break-words">
            Лендінг чи сайт: шо краще для бізнесу?
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Найпопулярніше питання, яке мені задають: «Слухай, мені лендінг робити чи нормальний сайт?». Коротка відповідь — залежить. Але давай розберемо детально, щоб не викинути гроші на те, що не працює.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Коли лендінг — твій варіант</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Лендінг — це одна сторінка з однією ціллю: заявка або продаж. Ідеально підходить, якщо ти запускаєш рекламу в Facebook/Instagram/Google і хочеш швидко тестувати гіпотезу. Роблю за 3–5 днів, ціна — від 3 000 грн.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Коли потрібен повноцінний сайт</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Якщо в тебе кілька напрямків бізнесу, каталог послуг або ти хочеш вести блог — однією сторінкою не обійтись. Багатосторінковий сайт дає більше точок входу з пошуку Google і краще покриває питання клієнтів. Вартість — від 3 000 грн, термін — 7–14 днів.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">А коли вже інтернет-магазин</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Продаєш товари онлайн? Тут без магазину ніяк. Кошик, оплата, каталог — це вже окремий проєкт. <Link to="/services/ecommerce" className="text-gray-900 font-semibold hover:underline">Розробка e-commerce</Link> від 5 000 грн.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Коротке порівняння</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-bold text-gray-900">Тип</th>
                  <th className="py-3 pr-4 font-bold text-gray-900">Ціна</th>
                  <th className="py-3 pr-4 font-bold text-gray-900">Термін</th>
                  <th className="py-3 font-bold text-gray-900">Коли</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100"><td className="py-3 pr-4 font-bold">Лендінг</td><td className="py-3 pr-4">від 3 000 грн</td><td className="py-3 pr-4">3–5 днів</td><td className="py-3">Запуск реклами</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4 font-bold">Бізнес-сайт</td><td className="py-3 pr-4">від 3 000 грн</td><td className="py-3 pr-4">7–14 днів</td><td className="py-3">Багато послуг</td></tr>
                <tr><td className="py-3 pr-4 font-bold">Магазин</td><td className="py-3 pr-4">від 5 000 грн</td><td className="py-3 pr-4">14–21 день</td><td className="py-3">Продаж товарів</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Коротко по ділу</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Тестуєш гіпотезу — бери лендінг. Бізнес росте — розширимо до повноцінного сайту. Сумніваєшся, що обрати? <Link to="/services/web-developer-kyiv" className="text-gray-900 font-semibold hover:underline">Напиши мені</Link> — підкажу, що краще під твою задачу.
          </p>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Не знаєш, що вибрати?</h3>
            <p className="text-gray-500 mb-6">Пиши в Telegram — розберемось безкоштовно.</p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors">
              Написати нам
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
