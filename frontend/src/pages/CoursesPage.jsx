import { useCourses } from "../hooks/useCourses";
import AddCourseForm from "../components/courses/AddCourseForm";
import CoursesList from "../components/courses/CoursesList";
import PageHeader from "../components/layout/PageHeader";
import { StatsCard } from "@/components/ui/stats-card";
import { BookOpen, Plus, Clock, Star } from "lucide-react";

export default function CoursesPage() {
  const { data: courses } = useCourses();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Courses"
        subtitle="Manage your course catalog and offerings"
        icon={BookOpen}
        gradient="from-green-500 to-blue-600"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Courses"
          value={courses?.length || 0}
          icon={BookOpen}
          gradient="from-green-500 to-blue-600"
          delay={100}
        />
        <StatsCard
          title="New Courses"
          value="8"
          change="+20%"
          changeType="positive"
          icon={Plus}
          gradient="from-blue-500 to-purple-600"
          delay={200}
        />
        <StatsCard
          title="Avg Duration"
          value="6 weeks"
          icon={Clock}
          gradient="from-purple-500 to-pink-600"
          delay={300}
        />
        <StatsCard
          title="Rating"
          value="4.8"
          change="+0.2"
          changeType="positive"
          icon={Star}
          gradient="from-yellow-500 to-orange-600"
          delay={400}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddCourseForm />
        </div>
        <div className="lg:col-span-2">
          <CoursesList />
        </div>
      </div>
    </div>
  );
}
