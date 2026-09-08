import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const posts = [
  {
    title: 'Лендінг чи сайт: шо краще для бізнесу?',
    desc: 'Кидати гроші на лендінг чи робити повноцінний сайт? Розбираю, коли який варіант працює, а коли це просто викинуті гроші.',
    href: '/blog/landing-vs-website',
    tag: 'Вибір',
    date: '10 квітня 2026',
    read: '5 хв',
  },
  {
    title: 'Сайт є, а заявок нема? Розбираю причини',
    desc: '7 причин, чому твій сайт не приносить клієнтів. Від швидкості до форми заявки — що поправити, щоб пішли заявки.',
    href: '/blog/no-leads-from-site',
    tag: 'Розбір',
    date: '16 квітня 2026',
    read: '6 хв',
  },
  {
    title: 'Сайт для бізнесу з нуля: покроковий план',
    desc: 'Вирішив зробити сайт, але не знаєш з чого почати? 10 простих кроків — від домену до запуску. Без води.',
    href: '/blog/site-from-scratch-checklist',
    tag: 'Старт',
    date: '22 квітня 2026',
    read: '7 хв',
  },
  {
    title: 'Чому я роблю сайти на React + Vite',
    desc: 'Чому не WordPress, не HTML, не Tilda. Пояснюю на пальцях, чому цей стек швидший, зручніший і краще для SEO.',
    href: '/blog/react-vite',
    tag: 'Гайд',
    date: '28 квітня 2026',
    read: '4 хв',
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Блог веб-розробника | KRVTSV CORP"
        description="Блог про створення сайтів: лендінг чи повноцінний сайт, чому немає заявок, React+Vite vs WordPress, запуск сайту з нуля. Пишу коротко і по ділу."
        path="/blog"
        ogType="website"
      />
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4">Блог</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 mb-4 break-words">
            Блог веб-<span className="text-rose-500">розробника</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-12">
            Пишу про сайти, розробку і речі, які реально працюють. Без води, без нудьги.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className="group block bg-white border-2 border-gray-100 hover:border-rose-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 bg-rose-100 px-3 py-1 rounded-full">{p.tag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{p.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-auto">{p.read}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-rose-500 transition-colors break-words">
                  {p.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base break-words">{p.desc}</p>
                <span className="inline-block mt-5 text-rose-500 font-black text-sm uppercase tracking-widest group-hover:underline">
                  Читати →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
