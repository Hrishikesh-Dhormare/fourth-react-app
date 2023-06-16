function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <h1 className="navbar-brand text-warning font-weight-900">
            <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
              {" "}
              Library <img src="icon.png" alt="" />
            </span>
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon bg-warning text-warning"
              value="Menu"
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-warning"
                  aria-current="page"
                  href="http://127.0.0.1:5500/index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-warning"
                  href="http://127.0.0.1:5500/About_us.html"
                >
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-warning"
                  href="http://127.0.0.1:5500/about-us.html"
                >
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-warning"
                  href="http://127.0.0.1:5500/sign-up.html"
                >
                  Sign-up
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-warning"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Log-in
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://127.0.0.1:5500/admin-login.html"
                    >
                      Admin
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://127.0.0.1:5500/student-login.html"
                    >
                      Student
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 border-warning"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-warning text-warning border-warning"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;