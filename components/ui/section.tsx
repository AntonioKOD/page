import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className,
  centered = false 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      centered && "text-center"
    )}>
      {subtitle && (
        <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4",
        className
      )}>
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}


