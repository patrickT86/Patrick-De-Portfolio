import { Quote } from "lucide-react";

interface ReviewCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
}

export function ReviewCard({ content, author, role, company }: ReviewCardProps) {
  return (
    <div className="border-2 border-border p-6 md:p-8 bg-card hover:shadow-md transition-all duration-300">
      <Quote className="h-8 w-8 mb-4 text-muted-foreground" />
      <blockquote className="text-lg mb-6 italic">&ldquo;{content}&rdquo;</blockquote>
      <div className="border-t-2 border-border pt-4">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role} at {company}
        </p>
      </div>
    </div>
  );
}
