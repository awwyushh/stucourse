import { Link, useLocation } from "react-router-dom";
import { Users, BookOpen, UserCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/students", label: "Students", icon: Users },
  { path: "/courses", label: "Courses", icon: BookOpen },
  { path: "/enrollments", label: "Enrollments", icon: UserCheck },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="relative bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-lg opacity-30 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                EduFlow
              </h1>
              <p className="text-xs text-gray-500">Student Management</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700",
                    "group-hover:scale-110"
                  )} />
                  <span>{item.label}</span>
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 -z-10" />
    </nav>
  );
}