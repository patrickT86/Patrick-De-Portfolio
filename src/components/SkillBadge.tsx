interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1.5 text-sm font-medium border-2 border-border bg-secondary hover:bg-accent transition-colors">
      {name}
    </span>
  );
}
