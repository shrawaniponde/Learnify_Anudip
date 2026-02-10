import React, { useRef, useState } from "react";
import ViewMoreSection from "./ViewMoreSection";

const LearnSection = ({ courses }) => {
  const sliderRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="container py-5 position-relative">

      {/* 👉 Slider View */}
      {!selectedCourse && (
        <>
          {/* ⬅️ Left Arrow */}
          <button
            className="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y z-3"
            onClick={scrollLeft}
          >
            ‹
          </button>

          {/* ➡️ Right Arrow */}
          <button
            className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y z-3"
            onClick={scrollRight}
          >
            ›
          </button>

          {/* 🟦 Horizontal Grid */}
          <div
            ref={sliderRef}
            className="d-flex gap-4 overflow-hidden px-5"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: "280px" }}
              >
                {/* ✅ SAME CARD DESIGN AS COURSE GRID */}
                <div className="card h-100 border-0 shadow">
                  <div className="d-flex justify-content-center pt-4">
                    <img
                      src={course.logo}
                      alt={course.name}
                      style={{ width: "60px" }}
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h6 className="text-center fw-semibold">
                      {course.name}
                    </h6>

                    <p className="text-muted small text-center">
                      {course.description}
                    </p>

                    {course.price && (
                      <p className="fw-bold text-center text-primary">
                        ₹{course.price}
                      </p>
                    )}

                    <button
                      className="btn btn-primary btn-sm mt-auto"
                      onClick={() => setSelectedCourse(course)}
                    >
                      View More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 👉 View More Section */}
      {selectedCourse && (
        <ViewMoreSection
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
};

export default LearnSection;
