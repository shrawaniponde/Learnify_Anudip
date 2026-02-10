import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CourseGrid from "../CourseGrid/CourseGrid";
import LearnSection from "../LearnSection/LearnSection";
import PurchasesPage from "../PurchasesPage/PurchasesPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import { courses } from "./coursesData";


const CoursesPage = () => {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState("home");

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row vh-100 overflow-hidden">

        {/* Sidebar */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        {/* Main Content */}
        <div className="col-md-10 p-4 overflow-auto">

          {/* Header with search */}
          <Header activePage={activePage} search={search} setSearch={setSearch} />

          {/* Pages */}
          {activePage === "home" && <CourseGrid courses={filteredCourses} />}
          {activePage === "purchases" && <PurchasesPage />}
          {activePage === "learnSection" && <LearnSection courses={filteredCourses} />}
          {activePage === "settings" && <SettingsPage />}
          
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
