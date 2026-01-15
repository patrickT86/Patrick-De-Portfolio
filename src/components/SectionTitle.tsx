interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-foreground mt-4" />
    </div>
  );
}
