import React from "react";

const PurchasesPage = () => {
  const purchases = [
    {
      id: 1,
      name: "React for Beginners",
      duration: "8 Weeks",
      price: 499,
      status: "Active",
    },
    {
      id: 2,
      name: "Java DSA Masterclass",
      duration: "12 Weeks",
      price: 799,
      status: "Completed",
    },
  ];

  return (
    <div>
      <h5 className="fw-bold mb-3">📦 My Purchases</h5>

      {purchases.length === 0 ? (
        <div className="text-center text-muted mt-5">
          <h6>No purchases yet</h6>
          <p>Buy a course to see it here</p>
        </div>
      ) : (
        <div className="row g-4">
          {purchases.map((course) => (
            <div className="col-md-4" key={course.id}>
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h6 className="fw-semibold">{course.name}</h6>

                  <p className="text-muted small mb-1">
                    Duration: {course.duration}
                  </p>

                  <p className="text-muted small mb-2">
                    Price: ₹{course.price}
                  </p>

                  <span
                    className={`badge ${
                      course.status === "Active"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {course.status}
                  </span>

                  <button className="btn btn-primary btn-sm w-100 mt-3">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchasesPage;
