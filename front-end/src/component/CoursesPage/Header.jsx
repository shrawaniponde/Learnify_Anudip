// Header.jsx
import React from "react";

export default function Header({ activePage, search, setSearch }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="fw-bold text-capitalize">{activePage}</h4>

      <div className="d-flex align-items-center gap-3">
        <div className="input-group" style={{ width: "260px" }}>
          <span className="input-group-text bg-white">🔍</span>
          <input
            type="text"
            className="form-control"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div
          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
          style={{ width: "42px", height: "42px" }}
        >
          👤
        </div>
      </div>
    </div>
  );
}
