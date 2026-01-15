interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export function ExperienceCard({ company, role, period, description }: ExperienceCardProps) {
  return (
    <div className="group border-2 border-border p-6 md:p-8 hover:shadow-md transition-all duration-300 bg-card">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">{company}</h3>
          <p className="text-lg text-muted-foreground">{role}</p>
        </div>
        <span className="text-sm font-mono text-muted-foreground border-2 border-border px-3 py-1 bg-secondary whitespace-nowrap">
          {period}
        </span>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex gap-3 text-muted-foreground">
            <span className="text-foreground mt-1.5">▪</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
