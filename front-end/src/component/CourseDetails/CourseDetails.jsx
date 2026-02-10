import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!course) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 rounded-4">

        <h2 className="fw-bold text-primary">{course.title}</h2>

        <p className="mt-3 fs-5 text-muted">
          {course.description}
        </p>

        <h4 className="mt-4">
          Price: <span className="text-success">₹{course.price}</span>
        </h4>

        <button className="btn btn-primary btn-lg mt-4">
          Enroll Now
        </button>

      </div>
    </div>
  );
};

export default CourseDetails;
