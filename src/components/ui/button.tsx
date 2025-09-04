import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-sage-muted bg-background text-foreground hover:bg-sage-muted hover:text-sage",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/20 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        elegant: "gradient-sage text-primary-foreground hover:shadow-elegant font-playfair font-medium",
        rose: "gradient-rose text-accent-foreground hover:shadow-elegant font-playfair font-medium",
        hero: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm shadow-soft font-playfair font-medium",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 px-4 py-2 text-sm rounded-md",
        lg: "h-14 px-8 py-4 text-base rounded-xl",
        xl: "h-16 px-12 py-5 text-lg rounded-xl",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
