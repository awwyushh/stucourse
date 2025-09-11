import { useState } from "react";
import { useEnrollments, useDeleteEnrollment } from "../../hooks/useEnrollments";
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHead, DataTableCell } from "@/components/ui/data-table";
import { GradientButton } from "@/components/ui/gradient-button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Search, Trash2, UserCheck, Users, BookOpen, Filter, Mail, Clock } from "lucide-react";

export default function EnrollmentsList() {
  const { data: enrollments, isLoading } = useEnrollments();
  const deleteEnrollment = useDeleteEnrollment();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEnrollments = enrollments?.filter(enrollment =>
    enrollment.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollment.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollment.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this enrollment?")) {
      deleteEnrollment.mutate(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-pink-600 rounded-full animate-spin animate-reverse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '400ms' }}>
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-4 w-5 h-5 text-gray-400 z-10" />
        <FloatingInput
          label="Search enrollments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12"
        />
        <div className="absolute right-3 top-3">
          <div className="p-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600">
            <Filter className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Enrollments Table */}
      <DataTable>
        <DataTableHeader>
          <DataTableRow>
            <DataTableHead>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Student</span>
              </div>
            </DataTableHead>
            <DataTableHead>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </div>
            </DataTableHead>
            <DataTableHead>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Course</span>
              </div>
            </DataTableHead>
            <DataTableHead>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Duration</span>
              </div>
            </DataTableHead>
            <DataTableHead className="text-right">Actions</DataTableHead>
          </DataTableRow>
        </DataTableHeader>
        <DataTableBody>
          {filteredEnrollments.length === 0 ? (
            <DataTableRow>
              <DataTableCell colSpan={5} className="text-center py-12">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">
                    {searchTerm ? "No enrollments found matching your search" : "No enrollments yet"}
                  </p>
                </div>
              </DataTableCell>
            </DataTableRow>
          ) : (
            filteredEnrollments.map((enrollment, index) => (
              <DataTableRow key={enrollment.id} className="animate-in fade-in slide-in-from-left duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <DataTableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      {enrollment.student.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{enrollment.student}</p>
                      <p className="text-xs text-gray-500">Student</p>
                    </div>
                  </div>
                </DataTableCell>
                <DataTableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-700">{enrollment.email}</span>
                  </div>
                </DataTableCell>
                <DataTableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs shadow-md">
                      {enrollment.course_name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-gray-900">{enrollment.course_name}</span>
                  </div>
                </DataTableCell>
                <DataTableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-gray-700">{enrollment.duration}</span>
                  </div>
                </DataTableCell>
                <DataTableCell className="text-right">
                  <GradientButton
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(enrollment.id)}
                    disabled={deleteEnrollment.isLoading}
                    className="hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </GradientButton>
                </DataTableCell>
              </DataTableRow>
            ))
          )}
        </DataTableBody>
      </DataTable>

      {/* Results Summary */}
      {filteredEnrollments.length > 0 && (
        <div className="flex items-center justify-between text-sm text-gray-600 px-2">
          <span>
            Showing {filteredEnrollments.length} of {enrollments?.length || 0} enrollments
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>Live data</span>
          </div>
        </div>
      )}
    </div>
  );
}