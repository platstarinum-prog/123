import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogSiteFromScratch() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Сайт для бізнесу з нуля: покроковий план | KRVTSV CORP"
        description="Вирішили зробити сайт для бізнесу, але не знаєте з чого почати? 10 кроків: домен, хостинг, дизайн, контент, запуск. Покрокова інструкція для новачків."
        path="/blog/site-from-scratch-checklist"
        ogType="article"
      />
      <Header />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Інструкція · 22 квітня 2026</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6 break-words">
            Сайт для бізнесу з нуля: покроковий план
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Відкриваєш бізнес і розумієш, що сайт потрібен, але з чого почати — неясно? Ось 10 кроків, які допоможуть зробити сайт, який реально працює, а не просто висить в інтернеті.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Зрозумій, навіщо тобі сайт</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Заявки? Продажі? Імідж? Від мети залежить тип сайту. Для тесту гіпотези бери <Link to="/blog/landing-vs-website" className="text-rose-600 font-bold hover:underline">лендінг</Link>, для продажу товарів — інтернет-магазин.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Придумай назву (домен)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Коротко, без дефісів, бажано .com.ua або .ua. Домен — це твоя адреса на роки, тому обери нормально.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Вибір хостингу</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Для сучасних сайтів — Cloudflare Pages. Швидко, безпечно, недорого. Я деплою саме туди.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Дизайн — не копіюй шаблони</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Унікальний дизайн + твої кольори = тебе запам'ятають. Приклади дивись у моїх <Link to="/#project" className="text-rose-600 font-bold hover:underline">проєктах</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Напиши текст (не водянисто)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Люди сканують сторінку по діагоналі. Коротко, чітко, по ділу: що пропонуєш, скільки коштує, як зв'язатись.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Зроби, щоб працювало на телефоні</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Більшість людей сидять з телефона. Якщо сайт неадаптивний — вважай, що половину клієнтів ти втратив ще до знайомства.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Форма, щоб писали</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Проста, зрозуміла, з Telegram-сповіщенням. Щоб заявка не загубилась у спамі.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">8. SEO — щоб тебе знаходили</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Метатеги, структура, швидкість. Щоб тебе знаходили за запитом «замовити сайт Київ». SEO входить у мої пакети — див. <Link to="/#prices" className="text-rose-600 font-bold hover:underline">ціни</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">9. Підключи аналітику</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Google Analytics та Meta Pixel. Без даних ти не знатимеш, що працює, а що ні.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">10. Запусти і перевір</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Пройди шлях клієнта: заповни форму, перевір сповіщення. Все ок? Ганяй рекламу.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Потрібен сайт з нуля?</h3>
            <p className="text-gray-500 mb-6">Зроблю під ключ — від ідеї до запуску за 3–14 днів.</p>
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
