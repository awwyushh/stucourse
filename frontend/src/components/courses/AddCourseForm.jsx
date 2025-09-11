import { useState } from "react";
import { useAddCourse } from "../../hooks/useCourses";
import { FloatingInput } from "@/components/ui/floating-input";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardContent } from "@/components/ui/animated-card";
import { BookOpen, Clock, Plus, Sparkles } from "lucide-react";

export default function AddCourseForm() {
  const [form, setForm] = useState({ course_name: "", duration: "" });
  const mutation = useAddCourse();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.course_name.trim() || !form.duration.trim()) {
      alert("Please fill in all fields");
      return;
    }
    mutation.mutate(form);
    setForm({ course_name: "", duration: "" });
  };

  return (
    <AnimatedCard className="max-w-md" delay={200}>
      <AnimatedCardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 shadow-lg">
            <Plus className="w-5 h-5 text-white" />
          </div>
          <AnimatedCardTitle>Add New Course</AnimatedCardTitle>
        </div>
        <p className="text-gray-600 mt-2">Create a new course offering</p>
      </AnimatedCardHeader>
      
      <AnimatedCardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <BookOpen className="absolute left-3 top-4 w-5 h-5 text-gray-400 z-10" />
            <FloatingInput
              label="Course Name"
              value={form.course_name}
              onChange={(e) => setForm({ ...form, course_name: e.target.value })}
              className="pl-12"
              required
            />
          </div>
          
          <div className="relative">
            <Clock className="absolute left-3 top-4 w-5 h-5 text-gray-400 z-10" />
            <FloatingInput
              label="Duration (e.g., 6 weeks, 3 months)"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              className="pl-12"
              required
            />
          </div>
          
          <GradientButton 
            type="submit" 
            disabled={mutation.isLoading}
            className="w-full"
            size="lg"
            gradient="from-green-500 to-blue-600"
          >
            {mutation.isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating Course...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Create Course
              </>
            )}
          </GradientButton>
        </form>
      </AnimatedCardContent>
    </AnimatedCard>
  );
}