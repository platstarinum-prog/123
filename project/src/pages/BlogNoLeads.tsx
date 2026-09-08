import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogNoLeads() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Сайт є, а заявок нема? Розбираю причини | KRVTSV CORP"
        description="Сайт працює, а клієнтів нема? 7 причин, чому форма порожня: швидкість, довіра, мобільна версія, SEO. Що виправити, щоб пішли заявки."
        path="/blog/no-leads-from-site"
        ogType="article"
      />
      <Header />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Розбір · 16 квітня 2026</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6 break-words">
            Сайт є, а заявок нема? Розбираю причини
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Знайома ситуація: сайт зробили, гроші віддали, а дзвінків — нуль. Давай розберемо 7 найчастіших причин, чому так буває, і що з цим робити.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Сайт довго грузиться</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Якщо сторінка відкривається довше 3 секунд — половина людей просто закриває вкладку. Перевір швидкість у PageSpeed Insights. Я роблю сайти з LCP до 0.8 секунди — це норма.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Ніхто не довіряє</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Немає портфоліо, контактів, соцмереж — сайт виглядає як одноденка. Додай реальні кейси (ось наші <Link to="/#project" className="text-rose-600 font-bold hover:underline">проєкти</Link>), фото, посилання на Instagram або LinkedIn.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Форма заявки бісить</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Довга форма з 10 полями вбиває бажання писати. Мінімум: ім'я + контакт. Велика кнопка, номер телефону на видному місці. У моїй формі три поля — і все йде в Telegram.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Не працює на телефоні</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Понад 60% людей заходять з телефона. Якщо на смартфоні сайт пливе, кнопки не натискаються — ти втрачаєш більшість клієнтів. Це база.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Тебе не знаходять у Google</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Без SEO тебе просто ніхто не побачить. Метатеги, швидкість, мікророзмітка — це обов'язковий мінімум. Це входить у мої пакети — див. <Link to="/#prices" className="text-rose-600 font-bold hover:underline">ціни</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Немає чіткої кнопки «Сюди тикати»</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Людина має одразу розуміти, що робити: «Замовити», «Написати», «Отримати консультацію». CTA-кнопка має бути на кожному екрані.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Реклама веде не туди</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Якщо ти женеш рекламу на головну сторінку, а не на цільовий лендінг під конкретну пропозицію — конверсія буде низькою. Це як запросити когось у гості і не показати, де вхід.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Перевірити свій сайт?</h3>
            <p className="text-gray-500 mb-6">Можу глянути безкоштовно і сказати, чому немає заявок.</p>
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
