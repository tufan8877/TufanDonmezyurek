interface SectionTitleProps {
  label?: string;
  title: string;
  centered?: boolean;
}

export default function SectionTitle({ label, title, centered }: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="mt-2 heading-2 text-balance">{title}</h2>
      <div className={`mt-4 h-px w-16 bg-teal-600 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
