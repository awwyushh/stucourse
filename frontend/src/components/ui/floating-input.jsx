import * as React from "react"
import { cn } from "@/lib/utils"

const FloatingInput = React.forwardRef(({ className, type, label, ...props }, ref) => {
  const [focused, setFocused] = React.useState(false)
  const [hasValue, setHasValue] = React.useState(false)

  const handleFocus = () => setFocused(true)
  const handleBlur = (e) => {
    setFocused(false)
    setHasValue(e.target.value !== '')
  }

  return (
    <div className="relative group">
      <input
        type={type}
        className={cn(
          "peer w-full px-4 pt-6 pb-2 text-base bg-white/50 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl transition-all duration-300 outline-none",
          "focus:border-blue-500 focus:bg-white/80 focus:shadow-lg focus:shadow-blue-500/20",
          "hover:border-gray-300 hover:bg-white/60",
          className
        )}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
        {...props}
      />
      <label
        className={cn(
          "absolute left-4 transition-all duration-300 pointer-events-none",
          "text-gray-500 peer-focus:text-blue-600",
          focused || hasValue || props.value
            ? "top-2 text-xs font-medium"
            : "top-4 text-base"
        )}
      >
        {label}
      </label>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 rounded-full" />
    </div>
  )
})

FloatingInput.displayName = "FloatingInput"

export { FloatingInput }