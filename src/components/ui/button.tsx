import { cva } from "class-variance-authority";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "icon";
}

const button = cva(
  "py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        ghost:
          "font-medium hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        primary:
          "bg-brand-primary text-white hover:bg-brand-primary-dark border hover:border-brand-primary-dark",
      },
      size: {
        sm: "px-6",
        md: "px-8",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ variant, size }) + " " + className} {...props}>
      {children}
    </button>
  );
}
