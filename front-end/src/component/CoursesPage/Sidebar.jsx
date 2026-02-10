/* ===== Sidebar.js ===== */
export default function Sidebar({ activePage, setActivePage }) {
  return (
    <>
      {/* ===== Mobile Toggle Button ===== */}
      <div className="d-md-none p-2 border-bottom">
        <button
          className="btn btn-outline-primary"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
        >
          ☰ Menu
        </button>
      </div>

      {/* ===== Desktop Sidebar ===== */}
      <div className="col-md-2 d-none d-md-block bg-light min-vh-100 p-3 border-end">
        <SidebarContent
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>

      {/* ===== Mobile Offcanvas Sidebar ===== */}
      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex="-1"
        id="sidebarOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="fw-bold text-primary">Learnify</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <SidebarContent
            activePage={activePage}
            setActivePage={setActivePage}
            closeOnClick
          />
        </div>
      </div>
    </>
  );
}

/* ===== Reusable Sidebar Content ===== */
function SidebarContent({ activePage, setActivePage, closeOnClick }) {
  const handleClick = (page) => {
    setActivePage(page);

    if (closeOnClick) {
      document.querySelector(".offcanvas.show")?.classList.remove("show");
      document.body.classList.remove("offcanvas-backdrop");
    }
  };

  return (
    <>
      <h5 className="fw-bold text-primary text-center mb-4 d-flex justify-content-center gap-2">
        <i className="bi bi-mortarboard-fill fs-2"></i>
        Learnify
      </h5>

      <ul className="nav flex-column gap-2">
        <li>
          <button
            className={`btn w-100 text-start ${
              activePage === "home" ? "btn-primary" : "btn-light"
            }`}
            onClick={() => handleClick("home")}
          >
            🏠 Home
          </button>
        </li>

        <li>
          <button
            className={`btn w-100 text-start ${
              activePage === "courses" ? "btn-primary" : "btn-light"
            }`}
            onClick={() => handleClick("courses")}
          >
            📚 Courses
          </button>
        </li>

        {/* ⭐ NEW THEORY PAGE */}
        <li>
          <button
            className={`btn w-100 text-start ${
            activePage === "learnSection" ? "btn-primary" : "btn-light"
          }`}
          onClick={() => handleClick("learnSection")} 
        >
          📖 Learn
        </button>
      </li>


        <li>
          <button
            className={`btn w-100 text-start ${
              activePage === "purchases" ? "btn-primary" : "btn-light"
            }`}
            onClick={() => handleClick("purchases")}
          >
            📦 Purchases
          </button>
        </li>

        <li>
          <button
            className={`btn w-100 text-start ${
              activePage === "settings" ? "btn-primary" : "btn-light"
            }`}
            onClick={() => handleClick("settings")}
          >
            ⚙️ Settings
          </button>
        </li>
      </ul>
    </>
  );
}
