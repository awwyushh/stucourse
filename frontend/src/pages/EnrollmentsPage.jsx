import { useEnrollments } from "../hooks/useEnrollments";
import AddEnrollmentForm from "../components/enrollments/AddEnrollmentForm";
import EnrollmentsList from "../components/enrollments/EnrollmentsList";
import PageHeader from "../components/layout/PageHeader";
import { StatsCard } from "@/components/ui/stats-card";
import { UserCheck, Users, BookOpen, TrendingUp } from "lucide-react";

export default function EnrollmentsPage() {
  const { data: enrollments } = useEnrollments();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Enrollments"
        subtitle="Track student course enrollments and progress"
        icon={UserCheck}
        gradient="from-purple-500 to-pink-600"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Enrollments"
          value={enrollments?.length || 0}
          icon={UserCheck}
          gradient="from-purple-500 to-pink-600"
          delay={100}
        />
        <StatsCard
          title="Active Students"
          value="156"
          change="+12%"
          changeType="positive"
          icon={Users}
          gradient="from-blue-500 to-purple-600"
          delay={200}
        />
        <StatsCard
          title="Popular Courses"
          value="24"
          change="+8%"
          changeType="positive"
          icon={BookOpen}
          gradient="from-green-500 to-blue-600"
          delay={300}
        />
        <StatsCard
          title="Growth Rate"
          value="18%"
          change="+3%"
          changeType="positive"
          icon={TrendingUp}
          gradient="from-orange-500 to-red-600"
          delay={400}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddEnrollmentForm />
        </div>
        <div className="lg:col-span-2">
          <EnrollmentsList />
        </div>
      </div>
    </div>
  );
}
