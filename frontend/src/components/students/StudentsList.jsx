import { useState } from "react";
import { useStudents, useDeleteStudent } from "../../hooks/useStudents";
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHead, DataTableCell } from "@/components/ui/data-table";
import { GradientButton } from "@/components/ui/gradient-button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Search, Trash2, Mail, User, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StudentsList() {
  const { data: students, isLoading } = useStudents();
  const deleteStudent = useDeleteStudent();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students?.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent.mutate(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-purple-600 rounded-full animate-spin animate-reverse" style={{ animationDelay: '0.5s' }} />
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
          label="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12"
        />
        <div className="absolute right-3 top-3">
          <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
            <Filter className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Students Table */}
      <DataTable>
        <DataTableHeader>
          <DataTableRow>
            <DataTableHead>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Student</span>
              </div>
            </DataTableHead>
            <DataTableHead>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </div>
            </DataTableHead>
            <DataTableHead>ID</DataTableHead>
            <DataTableHead className="text-right">Actions</DataTableHead>
          </DataTableRow>
        </DataTableHeader>
        <DataTableBody>
          {filteredStudents.length === 0 ? (
            <DataTableRow>
              <DataTableCell colSpan={4} className="text-center py-12">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">
                    {searchTerm ? "No students found matching your search" : "No students yet"}
                  </p>
                </div>
              </DataTableCell>
            </DataTableRow>
          ) : (
            filteredStudents.map((student, index) => (
              <DataTableRow key={student.id} className="animate-in fade-in slide-in-from-left duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <DataTableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      {student.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-500">Student</p>
                    </div>
                  </div>
                </DataTableCell>
                <DataTableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-700">{student.email}</span>
                  </div>
                </DataTableCell>
                <DataTableCell>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-mono">
                    #{student.id}
                  </span>
                </DataTableCell>
                <DataTableCell className="text-right">
                  <GradientButton
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(student.id)}
                    disabled={deleteStudent.isLoading}
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
      {filteredStudents.length > 0 && (
        <div className="flex items-center justify-between text-sm text-gray-600 px-2">
          <span>
            Showing {filteredStudents.length} of {students?.length || 0} students
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Live data</span>
          </div>
        </div>
      )}
    </div>
  );
}