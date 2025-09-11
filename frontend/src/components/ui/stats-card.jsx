import * as React from "react"
import { cn } from "@/lib/utils"

function StatsCard({
  className,
  title,
  value,
  change,
  changeType = "positive",
  icon: Icon,
  gradient = "from-blue-500 to-purple-600",
  delay = 0,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group",
        "animate-in fade-in slide-in-from-bottom-4 duration-700",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">
            {value}
          </p>
          {change && (
            <div className={cn(
              "flex items-center text-sm font-medium",
              changeType === "positive" ? "text-green-600" : "text-red-600"
            )}>
              <span className={cn(
                "inline-block w-2 h-2 rounded-full mr-2",
                changeType === "positive" ? "bg-green-500" : "bg-red-500"
              )} />
              {change}
            </div>
          )}
        </div>
        {Icon && (
          <div className={cn(
            "p-3 rounded-xl bg-gradient-to-br shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300",
            gradient
          )}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
      </div>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
        gradient
      )} />
    </div>
  )
}

export { StatsCard }