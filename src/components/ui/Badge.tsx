import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "highlight" | "muted" | "danger";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  primary: "bg-[var(--color-ocean-100)] text-[var(--color-ocean-700)]",
  accent: "bg-[var(--color-teal-100)] text-[var(--color-teal-700)]",
  highlight: "bg-[var(--color-sunset-100)] text-[var(--color-sunset-700)]",
  muted: "bg-[var(--color-sand-100)] text-[var(--color-sand-600)]",
  danger: "bg-red-100 text-red-700",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  variant = "muted",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
