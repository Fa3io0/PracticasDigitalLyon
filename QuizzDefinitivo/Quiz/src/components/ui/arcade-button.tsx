import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const arcadeButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 pixel-corners relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--neon-cyan))] hover:shadow-[0_0_30px_hsl(var(--neon-cyan))] border-2 border-primary",
        arcade:
          "bg-arcade-dark text-neon-cyan border-2 border-neon-cyan shadow-[0_0_15px_hsl(var(--neon-cyan)),inset_0_0_15px_hsl(var(--neon-cyan))] hover:shadow-[0_0_25px_hsl(var(--neon-cyan)),inset_0_0_25px_hsl(var(--neon-cyan))] hover:bg-neon-cyan/10",
        magenta:
          "bg-arcade-dark text-neon-magenta border-2 border-neon-magenta shadow-[0_0_15px_hsl(var(--neon-magenta)),inset_0_0_15px_hsl(var(--neon-magenta))] hover:shadow-[0_0_25px_hsl(var(--neon-magenta)),inset_0_0_25px_hsl(var(--neon-magenta))] hover:bg-neon-magenta/10",
        yellow:
          "bg-arcade-dark text-neon-yellow border-2 border-neon-yellow shadow-[0_0_15px_hsl(var(--neon-yellow)),inset_0_0_15px_hsl(var(--neon-yellow))] hover:shadow-[0_0_25px_hsl(var(--neon-yellow)),inset_0_0_25px_hsl(var(--neon-yellow))] hover:bg-neon-yellow/10",
        green:
          "bg-arcade-dark text-neon-green border-2 border-neon-green shadow-[0_0_15px_hsl(var(--neon-green)),inset_0_0_15px_hsl(var(--neon-green))] hover:shadow-[0_0_25px_hsl(var(--neon-green)),inset_0_0_25px_hsl(var(--neon-green))] hover:bg-neon-green/10",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        xl: "h-16 px-10 py-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ArcadeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof arcadeButtonVariants> {
  asChild?: boolean;
}

const ArcadeButton = React.forwardRef<HTMLButtonElement, ArcadeButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(arcadeButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ArcadeButton.displayName = "ArcadeButton";

export { ArcadeButton, arcadeButtonVariants };