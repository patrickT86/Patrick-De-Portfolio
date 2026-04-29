import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DiagramNode {
  label: string;
  sub?: string;
  icon: LucideIcon;
}

export interface DiagramRow {
  title: string;
  nodes: DiagramNode[];
}

interface ArchitectureDiagramProps {
  title: string;
  description?: string;
  rows: DiagramRow[];
}

export function ArchitectureDiagram({ title, description, rows }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-6 md:p-10 shadow-lg">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">System Design</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        {description && <p className="text-muted-foreground max-w-3xl">{description}</p>}
      </div>

      <div className="space-y-4">
        {rows.map((row, rowIdx) => (
          <div key={row.title} className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                Layer {rowIdx + 1}
              </span>
              <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">{row.title}</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {row.nodes.map((node) => (
                <div
                  key={node.label}
                  className="rounded-xl border border-border bg-background/80 backdrop-blur p-4 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                      <node.icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold">{node.label}</p>
                  </div>
                  {node.sub && (
                    <p className="text-xs text-muted-foreground pl-9 leading-snug">{node.sub}</p>
                  )}
                </div>
              ))}
            </div>
            {rowIdx < rows.length - 1 && (
              <div className="flex justify-center my-3">
                <ArrowRight className="h-5 w-5 text-primary/60 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}