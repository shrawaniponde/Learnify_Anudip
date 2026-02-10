import { useNavigate } from "react-router-dom";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");     // 🧹 Clear saved session
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav
      className="navbar sticky-top px-4 py-3"
      style={{ background: "white" }}
    >
      <h2 className="text-primary fw-bold m-0">Learnify.</h2>

      <div>
        {!isAuthenticated ? (
          <>
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        ) : (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

