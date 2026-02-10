import React, { useState } from "react";
import PaymentModal from "../paymentSection/PaymentModal.jsx";

export default function CourseGrid({ courses }) {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [priceFilter, setPriceFilter] = useState("all");

  const handleBuy = (price) => {
    setSelectedPrice(price);
    setShowPayment(true);
  };

  // 🔹 Price Filter logic
  const filteredCourses = courses.filter((course) => {
    if (priceFilter === "under500") return course.price < 500;
    if (priceFilter === "under1000") return course.price < 1000;
    if (priceFilter === "above1000") return course.price >= 1000;
    return true;
  });

  return (
    <>
      {/* 🔍 Price Filter */}
      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="under500">Under ₹500</option>
          <option value="under1000">Under ₹1000</option>
          <option value="above1000">Above ₹1000</option>
        </select>
      </div>

      {/* 📦 Course Cards */}
      <div className="row g-4 ">
        {filteredCourses.map((course, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
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

                <p className="fw-bold text-center text-primary">
                  ₹{course.price}
                </p>

                <button
                  className="btn btn-primary btn-sm mt-auto"
                  onClick={() => handleBuy(course.price)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <p className="text-center text-muted">
            No courses found for this price range.
          </p>
        )}
      </div>

      {/* 💳 Payment Modal */}
      <PaymentModal
        show={showPayment}
        price={selectedPrice}
        onClose={() => setShowPayment(false)}
      />
    </>
  );
}
