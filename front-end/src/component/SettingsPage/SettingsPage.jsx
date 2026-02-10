import React from "react";

const SettingsPage = () => {
  return (
    <div style={{ maxWidth: "600px" }}>
      <h5 className="fw-bold mb-3">⚙️ Account Settings</h5>

      {/* Profile */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h6 className="fw-semibold mb-3">Profile Information</h6>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email.."
          />

          <button className="btn btn-primary btn-sm">
            Save Changes
          </button>
        </div>
      </div>

      {/* Password */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h6 className="fw-semibold mb-3">Change Password</h6>

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Current Password"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="New Password"
          />

          <button className="btn btn-outline-primary btn-sm">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
