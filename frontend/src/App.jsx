import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import EnrollmentsPage from "./pages/EnrollmentsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/enrollments" element={<EnrollmentsPage />} />
            <Route path="*" element={<StudentsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
