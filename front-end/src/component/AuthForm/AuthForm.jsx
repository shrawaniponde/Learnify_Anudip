import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { registerUser, loginUser } from "../../services/api";

const AuthForm = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await loginUser({ email, password });
        localStorage.setItem("user", JSON.stringify(res.data));
        setIsAuthenticated(true);
        alert("Login successful");
        navigate("/");
      } else {
        await registerUser({ name, email, password });
        alert("Registered successfully! Please login.");
        navigate("/login");
      }
    } catch (error) {
      alert("Authentication failed");
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ background: "linear-gradient(135deg, #0b1c2d, #112d44)" }}
      >
        <div className="card shadow p-4 rounded-4" style={{ width: "350px" }}>
          <h4 className="text-center fw-bold mb-2">
            Welcome to <span className="text-primary">Learnify</span>
          </h4>

          <p className="text-center text-muted mb-4">
            {isLogin
              ? "Login to access the dashboard"
              : "Sign up to get started!"}
          </p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="d-flex mb-3">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control me-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {isLogin && (
              <div className="text-end mb-3">
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPopup(true)}
                >
                  Forgot password?
                </span>
              </div>
            )}

            <button className="btn btn-primary w-100 mb-3">
              {isLogin ? "Login" : "Signup"}
            </button>

            <p className="text-center text-muted mb-0">
              {isLogin ? (
                <>
                  Not a member?{" "}
                  <span
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                  >
                    Signup
                  </span>
                </>
              ) : (
                <>
                  Already a member?{" "}
                  <span
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </form>
        </div>
      </div>

      {showPopup && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reset Password</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowPopup(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p className="text-muted small">
                  Enter your email to receive a password reset link.
                </p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter registered email"
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary">Send Link</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthForm;
