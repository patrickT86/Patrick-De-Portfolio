interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1.5 text-sm font-medium rounded-full border border-border bg-secondary/50 hover:bg-accent hover:border-primary/30 transition-all duration-300">
      {name}
    </span>
  );
}