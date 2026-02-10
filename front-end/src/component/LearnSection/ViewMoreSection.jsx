import React, { useState } from "react";

export default function ViewMoreSection({ course, onClose }) {
  const [showLearn, setShowLearn] = useState(false);

  if (!course) return null;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>{course.name}</h2>
        <button className="btn btn-outline-danger" onClick={onClose}>
          ✕ Close
        </button>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => setShowLearn(!showLearn)}
      >
        {showLearn ? "Hide Resources" : "Learn"}
      </button>

      {showLearn && (
        <div className="card mt-4 p-4" style={{ maxWidth: "400px" }}>
          <h5 className="mb-3">Learning Resources</h5>

          <a
            href={course.pdf}
            target="_blank"
            rel="noreferrer"
            className="d-block mb-2"
          >
            📄 Download PDF Notes
          </a>

          <a
            href={course.video}
            target="_blank"
            rel="noreferrer"
            className="d-block mb-3"
          >
            ▶️ Watch YouTube Video
          </a>

          <button className="btn btn-outline-success w-100">
            💬 Chat with Tutor
          </button>
        </div>
      )}
    </div>
  );
}
