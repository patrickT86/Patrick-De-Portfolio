import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export function ReviewCard({ content, author, role, company, avatarUrl }: ReviewCardProps) {
  const initials = author.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="rounded-xl border border-border p-6 md:p-8 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <Quote className="h-8 w-8 mb-4 text-primary/40" />
      <blockquote className="text-lg mb-6 leading-relaxed text-muted-foreground">
        &ldquo;{content}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}