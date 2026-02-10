import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../services/api";

const CourseSection = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container text-center">

        <h1 className="display-6 fw-bold text-primary">
          Learnify Website
        </h1>

        <p className="text-muted mb-4">
          Learn programming from scratch with industry-ready courses
        </p>

        <div className="mb-5 d-flex justify-content-center gap-3">
          <button
            className="btn btn-primary px-4 shadow-sm"
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </button>

          <button className="btn btn-outline-secondary px-4 shadow-sm">
            Courses Video
          </button>
        </div>

        <button
          className="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y"
          onClick={scrollLeft}
        >
          ‹
        </button>

        <button
          className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y z-3"
          onClick={scrollRight}
        >
          ›
        </button>

        <div ref={sliderRef} className="d-flex gap-4 overflow-hidden px-5">

          {courses.map((course) => (
            <div
              key={course.id}
              className="flex-shrink-0"
              style={{ width: "260px" }}
            >
              <div
                className="card h-100 text-center border-0 shadow-sm"
                style={{ transition: "all 0.3s ease" }}
              >
                <div className="card-body d-flex flex-column">

                  <h6 className="fw-semibold mb-3">
                    {course.title}
                  </h6>

                  <p className="text-muted small">
                    {course.description}
                  </p>

                  <strong className="mb-3">₹ {course.price}</strong>

                  <button
                    className="btn btn-sm btn-outline-primary mt-auto"
                    onClick={() => navigate("/courses")}
                  >
                    View Course
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CourseSection;
