import type { ExperienceItem } from '@/data/experience';

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative md:flex md:items-center ${
                isLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 -translate-x-1/2 md:left-1/2">
                <div className="h-3 w-3 rounded-full border-2 border-teal-600 bg-white" />
              </div>

              {/* Content */}
              <div className="ml-6 md:ml-0 md:w-1/2 md:px-8">
                <div className="card-tech">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.company} · {item.location}
                  </p>
                  {item.tasks.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                      {item.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Empty spacer for desktop layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
