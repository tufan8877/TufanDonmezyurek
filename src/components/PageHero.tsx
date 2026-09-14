interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative border-b border-slate-200 bg-white blueprint-grid">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-600/30 to-transparent" />
      <div className="container-tech py-10 sm:py-14 lg:py-16">
        <p className="section-label animate-fade-up">{label}</p>
        <h1 className="mt-3 heading-1 animate-fade-up animate-delay-100 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-slate-500 animate-fade-up animate-delay-200 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
