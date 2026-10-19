import React from 'react';

interface PageHeroProps {
  badge: string;
  title: string | React.ReactNode;
  description: string;
  badgeVariant?: 'gold' | 'blue';
}

export default function PageHero({
  badge,
  title,
  description,
  badgeVariant = 'gold',
}: PageHeroProps) {
  const badgeClasses =
    badgeVariant === 'blue'
      ? 'text-blue-light bg-blue/10 border-blue/30'
      : 'text-gold-light bg-gold/10 border-gold/30';

  return (
    <section className="relative bg-[#060A1A] pt-[140px] pb-16 sm:pb-20 border-b border-navy-border/60 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-4 ${badgeClasses}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
