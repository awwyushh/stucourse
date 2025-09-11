import * as React from "react"
import { cn } from "@/lib/utils"

function AnimatedCard({
  className,
  children,
  delay = 0,
  ...props
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "animate-in fade-in slide-in-from-bottom-4 duration-700",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

function AnimatedCardHeader({
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative p-6 pb-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function AnimatedCardTitle({
  className,
  children,
  ...props
}) {
  return (
    <h3
      className={cn(
        "text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function AnimatedCardContent({
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn("px-6 pb-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  AnimatedCard,
  AnimatedCardHeader,
  AnimatedCardTitle,
  AnimatedCardContent,
}