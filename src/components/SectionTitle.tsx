interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
      <div className="w-16 h-1 bg-primary rounded-full mt-6" />
    </div>
  );
}