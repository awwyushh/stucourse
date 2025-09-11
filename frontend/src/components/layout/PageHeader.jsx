import { cn } from "@/lib/utils";

export default function PageHeader({ 
  title, 
  subtitle, 
  icon: Icon, 
  gradient = "from-blue-600 via-purple-600 to-pink-600",
  children,
  className 
}) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/20 shadow-xl p-8 mb-8",
      "animate-in fade-in slide-in-from-top-4 duration-700",
      className
    )}>
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {Icon && (
              <div className={cn(
                "p-3 rounded-xl bg-gradient-to-br shadow-lg",
                gradient
              )}>
                <Icon className="w-8 h-8 text-white" />
              </div>
            )}
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-gray-600 mt-2 text-lg">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {children && (
            <div className="flex items-center space-x-4">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full blur-3xl translate-y-24 -translate-x-24" />
    </div>
  );
}