interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export function ExperienceCard({ company, role, period, description }: ExperienceCardProps) {
  return (
    <div className="group rounded-xl border border-border p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 bg-card">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{company}</h3>
          <p className="text-lg text-muted-foreground">{role}</p>
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
    </div>
  );
}