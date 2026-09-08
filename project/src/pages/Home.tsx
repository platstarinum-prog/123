import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useHashScrollOnMount } from '../components/NavLink';

const Advantages = lazy(() => import('../components/Advantages'));
const TopProject = lazy(() => import('../components/TopProject'));
const Prices = lazy(() => import('../components/Prices'));
const Process = lazy(() => import('../components/Process'));
const Contact = lazy(() => import('../components/Contact'));

export default function Home() {
  useHashScrollOnMount();
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Advantages />
          <TopProject />
          <Prices />
          <Process />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
