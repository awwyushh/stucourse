import { useState } from "react";
import { useAddEnrollment } from "../../hooks/useEnrollments";
import { useStudents } from "../../hooks/useStudents";
import { useCourses } from "../../hooks/useCourses";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardContent } from "@/components/ui/animated-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCheck, Users, BookOpen, Plus, Sparkles } from "lucide-react";

export default function AddEnrollmentForm() {
  const [form, setForm] = useState({ student_id: "", course_id: "" });
  const mutation = useAddEnrollment();
  const { data: students } = useStudents();
  const { data: courses } = useCourses();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.student_id || !form.course_id) {
      alert("Please select both a student and a course");
      return;
    }
    mutation.mutate({
      student_id: parseInt(form.student_id),
      course_id: parseInt(form.course_id)
    });
    setForm({ student_id: "", course_id: "" });
  };

  return (
    <AnimatedCard className="max-w-md" delay={200}>
      <AnimatedCardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
            <Plus className="w-5 h-5 text-white" />
          </div>
          <AnimatedCardTitle>New Enrollment</AnimatedCardTitle>
        </div>
        <p className="text-gray-600 mt-2">Enroll a student in a course</p>
      </AnimatedCardHeader>
      
      <AnimatedCardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Select Student</span>
            </label>
            <Select value={form.student_id} onValueChange={(value) => setForm({ ...form, student_id: value })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a student..." />
              </SelectTrigger>
              <SelectContent>
                {students?.map((student) => (
                  <SelectItem key={student.id} value={student.id.toString()}>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {student.name.charAt(0).toUpperCase()}
                      </div>
                      <span>{student.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Select Course</span>
            </label>
            <Select value={form.course_id} onValueChange={(value) => setForm({ ...form, course_id: value })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a course..." />
              </SelectTrigger>
              <SelectContent>
                {courses?.map((course) => (
                  <SelectItem key={course.id} value={course.id.toString()}>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {course.course_name.charAt(0).toUpperCase()}
                      </div>
                      <span>{course.course_name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <GradientButton 
            type="submit" 
            disabled={mutation.isLoading}
            className="w-full"
            size="lg"
            gradient="from-purple-500 to-pink-600"
          >
            {mutation.isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enrolling Student...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Enroll Student
              </>
            )}
          </GradientButton>
        </form>
      </AnimatedCardContent>
    </AnimatedCard>
  );
}