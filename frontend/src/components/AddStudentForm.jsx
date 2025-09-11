import { useState } from "react";
import { useAddStudent } from "../hooks/useStudents";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AddStudentForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const mutation = useAddStudent();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(form.email)) return alert("Invalid email");
    mutation.mutate(form);
    setForm({ name: "", email: "" });
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Add Student</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Adding..." : "Add Student"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
