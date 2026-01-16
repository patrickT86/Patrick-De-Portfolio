import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Patrick Tracey. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/lkrauleidis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:patrick.tracey86@zohomail.com"
              className="p-2.5 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}