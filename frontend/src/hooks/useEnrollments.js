import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/client";

export const useEnrollments = () =>
  useQuery({
    queryKey: ["enrollments"],
    queryFn: async () => (await api.get("/enrollments")).data,
  });

export const useAddEnrollment = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (enrollment) => api.post("/enrollments", enrollment),
    onSuccess: () => qc.invalidateQueries(["enrollments"]),
  });
};

export const useDeleteEnrollment = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/enrollments/${id}`),
    onSuccess: () => qc.invalidateQueries(["enrollments"]),
  });
};