interface ProjectRef {
  label: string;
  url: string;
}

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  location?: string;
  projects?: ProjectRef[];
}

export function ExperienceCard({ company, role, period, description, location, projects }: ExperienceCardProps) {
  return (
    <div className="group rounded-xl border border-border p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 bg-card">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{company}</h3>
          <p className="text-lg text-muted-foreground">{role}</p>
          {location && <p className="text-sm text-muted-foreground/80 mt-0.5">{location}</p>}
        </div>
        <span className="text-sm font-medium text-muted-foreground rounded-full border border-border px-4 py-1.5 bg-secondary/50 whitespace-nowrap">
          {period}
        </span>
      </div>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="text-primary mt-1.5 shrink-0">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {projects && projects.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Projects & References
          </p>
          <div className="flex flex-wrap gap-2">
            {projects.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/40 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
              >
                {p.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}