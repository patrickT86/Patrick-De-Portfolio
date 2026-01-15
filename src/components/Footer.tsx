import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Patrick Tracey. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lkrauleidis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-border hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:patrick.tracey86@zohomail.com"
              className="p-2 border-2 border-border hover:bg-accent transition-colors"
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
