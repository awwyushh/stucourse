import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/client";

export const useStudents = () =>
  useQuery({
    queryKey: ["students"],
    queryFn: async () => (await api.get("/students")).data,
  });

export const useAddStudent = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (student) => api.post("/students", student),
    onSuccess: () => qc.invalidateQueries(["students"]),
  });
};

export const useDeleteStudent = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/students/${id}`),
    onSuccess: () => qc.invalidateQueries(["students"]),
  });
};