import { useState } from "react";
import { useAddStudent } from "../../hooks/useStudents";
import { FloatingInput } from "@/components/ui/floating-input";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardContent } from "@/components/ui/animated-card";
import { UserPlus, Mail, User, Sparkles } from "lucide-react";

export default function AddStudentForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const mutation = useAddStudent();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }
    mutation.mutate(form);
    setForm({ name: "", email: "" });
  };

  return (
    <AnimatedCard className="max-w-md" delay={200}>
      <AnimatedCardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <UserPlus className="w-5 h-5 text-white" />
          </div>
          <AnimatedCardTitle>Add New Student</AnimatedCardTitle>
        </div>
        <p className="text-gray-600 mt-2">Create a new student profile</p>
      </AnimatedCardHeader>
      
      <AnimatedCardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-4 w-5 h-5 text-gray-400 z-10" />
            <FloatingInput
              label="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="pl-12"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400 z-10" />
            <FloatingInput
              type="email"
              label="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="pl-12"
              required
            />
          </div>
          
          <GradientButton 
            type="submit" 
            disabled={mutation.isLoading}
            className="w-full"
            size="lg"
          >
            {mutation.isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Adding Student...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Add Student
              </>
            )}
          </GradientButton>
        </form>
      </AnimatedCardContent>
    </AnimatedCard>
  );
}