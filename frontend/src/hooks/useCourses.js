import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/client";

export const useCourses = () =>
  useQuery({
    queryKey: ["courses"],
    queryFn: async () => (await api.get("/courses")).data,
  });

export const useAddCourse = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (course) => api.post("/courses", course),
    onSuccess: () => qc.invalidateQueries(["courses"]),
  });
};

export const useDeleteCourse = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/courses/${id}`),
    onSuccess: () => qc.invalidateQueries(["courses"]),
  });
};