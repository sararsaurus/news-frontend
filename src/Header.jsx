import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { Login } from "./Login";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };
  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };
  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  // const handleLogout = (event) => {
  //   event.preventDefault();
  //   delete axios.defaults.headers.common["Authorization"];
  //   localStorage.removeItem("jwt");
  //   window.location.href = "/";
  // };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CSR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              | |
              <li className="nav-item">
                <a onClick={handleSignupShow} href="#">
                  Signup
                </a>
              </li>
              | |
              <li className="nav-item">
                <a onClick={handleLoginShow} href="#">
                  Login
                </a>
              </li>
              ||
              <li className="nav-item">
                <LogoutLink />
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
      <Modal show={isLoginVisible} onClose={handleLoginClose}>
        <Login />
      </Modal>
    </header>
  );
}
