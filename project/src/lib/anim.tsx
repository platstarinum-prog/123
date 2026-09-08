import { useRef, useEffect, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* ---------- Magnetic: элемент тянется к курсору ---------- */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Spotlight: бегущий градиент за курсором ---------- */
export function Spotlight({
  children,
  className,
  from = 'rgba(244,63,94,0.18)',
  to = 'rgba(139,92,246,0.18)',
}: {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  const reset = () => {
    mx.set(-200);
    my.set(-200);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`relative overflow-hidden ${className ?? ''}`}
    >
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(220px circle at center, ${from}, ${to}, transparent 70%)` }}
        />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ---------- Tilt: легкий 3D-наклон карточки ---------- */
export function Tilt({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- AnimatedGradientText: переливающийся градиент ---------- */
export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={`bg-[linear-gradient(110deg,#e11d48,#f43f5e,#fb7185,#e11d48)] bg-[length:200%_auto] bg-clip-text text-transparent ${className ?? ''}`}
      animate={{ backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.span>
  );
}

/* ---------- ScrollProgress: градиентная полоса прогресса ---------- */
export function ScrollProgress() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[200] origin-left bg-gradient-to-r from-rose-500 via-red-500 to-rose-700"
      style={{ scaleX: useTransform(useSpring(useProgressValue(), { stiffness: 120, damping: 30 }), [0, 1], [0, 1]) }}
    />
  );
}

function useProgressValue() {
  const v = useMotionValue(0);
  if (typeof window !== 'undefined') {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      v.set(max > 0 ? h.scrollTop / max : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
  return v;
}

/* ---------- Reveal: диагональное появление с blur ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Parallax: шар рухається від скролу ---------- */
export function Parallax({
  children,
  className,
  amount = 60,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const sy = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      y.set((-center / window.innerHeight) * amount);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [y, amount]);

  return (
    <motion.div ref={ref} style={{ y: sy }} className={className}>
      {children}
    </motion.div>
  );
}
