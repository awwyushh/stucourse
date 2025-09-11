import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import EnrollmentsPage from "./pages/EnrollmentsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Top Navigation */}
        <nav className="p-4 bg-gray-100 shadow flex gap-6">
          <Link to="/students" className="hover:underline">Students</Link>
          <Link to="/courses" className="hover:underline">Courses</Link>
          <Link to="/enrollments" className="hover:underline">Enrollments</Link>
        </nav>

        {/* Routes */}
        <div className="p-6">
          <Routes>
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/enrollments" element={<EnrollmentsPage />} />
            {/* Default redirect */}
            <Route path="*" element={<StudentsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
