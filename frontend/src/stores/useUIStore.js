import { create } from "zustand"

export const useUIStore = create((set) => ({
    filterCourse: "",
    setFilterCourse: (course) => set({filterCourse: course}),
}));