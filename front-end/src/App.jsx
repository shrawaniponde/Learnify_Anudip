import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./component/navbar/navbar";
import AuthForm from "./component/AuthForm/AuthForm";
import CourseSection from "./component/coursesection/CourseSection";
import CoursesPage from "./component/CoursesPage/CoursesPage";
import Footer from "./component/footer/footer";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 🔐 Keep user logged in after refresh
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <AuthForm setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <AuthForm setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* HOME */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <CourseSection />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* COURSES */}
        <Route
          path="/courses"
          element={
            isAuthenticated ? (
              <CoursesPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
