import { useStudents } from "../hooks/useStudents";
import AddStudentForm from "../components/AddStudentForm";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function StudentsPage() {
  const { data: students, isLoading } = useStudents();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      <AddStudentForm />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students?.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
