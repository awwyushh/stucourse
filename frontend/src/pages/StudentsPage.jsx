import { useStudents } from "../hooks/useStudents";
import AddStudentForm from "../components/students/AddStudentForm";
import StudentsList from "../components/students/StudentsList";
import PageHeader from "../components/layout/PageHeader";
import { StatsCard } from "@/components/ui/stats-card";
import { Users, UserPlus, TrendingUp, Award } from "lucide-react";

export default function StudentsPage() {
  const { data: students } = useStudents();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Students"
        subtitle="Manage your student database with ease"
        icon={Users}
        gradient="from-blue-600 via-purple-600 to-pink-600"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value={students?.length || 0}
          icon={Users}
          gradient="from-blue-500 to-purple-600"
          delay={100}
        />
        <StatsCard
          title="New This Month"
          value="12"
          change="+15%"
          changeType="positive"
          icon={UserPlus}
          gradient="from-green-500 to-blue-600"
          delay={200}
        />
        <StatsCard
          title="Active Rate"
          value="94%"
          change="+2%"
          changeType="positive"
          icon={TrendingUp}
          gradient="from-purple-500 to-pink-600"
          delay={300}
        />
        <StatsCard
          title="Completion"
          value="87%"
          change="+5%"
          changeType="positive"
          icon={Award}
          gradient="from-orange-500 to-red-600"
          delay={400}
        />
      </div>
    </div>
  );
}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddStudentForm />
        </div>
        <div className="lg:col-span-2">
          <StudentsList />
        </div>
      </div>