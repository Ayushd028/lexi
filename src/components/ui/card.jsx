import * as React from "react"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={
      className
        ? `rounded-lg border bg-card text-card-foreground shadow-sm ${className}`
        : "rounded-lg border bg-card text-card-foreground shadow-sm"
    }
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className ? `flex flex-col space-y-1.5 p-6 ${className}` : "flex flex-col space-y-1.5 p-6"}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={
      className
        ? `text-2xl font-semibold leading-none tracking-tight ${className}`
        : "text-2xl font-semibold leading-none tracking-tight"
    }
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={className ? `text-sm text-muted-foreground ${className}` : "text-sm text-muted-foreground"}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={className ? `p-6 pt-0 ${className}` : "p-6 pt-0"} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className ? `flex items-center p-6 pt-0 ${className}` : "flex items-center p-6 pt-0"}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
