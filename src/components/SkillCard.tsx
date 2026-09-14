import { Wrench, Search, Flame, Headphones, Camera, Gauge, ShieldCheck, FileText } from 'lucide-react';

const iconMap: Record<string, typeof Wrench> = {
  wrench: Wrench,
  search: Search,
  flame: Flame,
  headset: Headphones,
  camera: Camera,
  gauge: Gauge,
  shield: ShieldCheck,
  docs: FileText,
};

interface SkillCardProps {
  title: string;
  icon: string;
  items?: string[];
  description?: string;
  asList?: boolean;
}

export default function SkillCard({ title, icon, items, description, asList }: SkillCardProps) {
  const Icon = iconMap[icon] || Wrench;

  return (
    <div className="card-tech group">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700 transition-colors group-hover:border-teal-600 group-hover:text-teal-800">
          <Icon size={20} />
        </div>
        <h3 className="heading-3">{title}</h3>
      </div>

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
      )}

      {asList && items && (
        <ul className="mt-4 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
