import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import AuthService from "../services/auth.service";

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  function handleLogout() {
    setCurrentUser(null);
    AuthService.logout();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            首頁
          </Link>
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
              {!currentUser&&<li className="nav-item">
                <Link to="/register" className="nav-link active" aria-current="page">註冊會員</Link>
              </li>}
              {!currentUser&&<li className="nav-item">
                <Link to="/login" className="nav-link">會員登入</Link>
              </li>}
              {currentUser&&<li className="nav-item">
                <Link onClick={handleLogout} to="/" className="nav-link">登出</Link>
              </li>}
              {currentUser&&<li className="nav-item">
                <Link to="/profile" className="nav-link">個人頁面</Link>
              </li>}
              {currentUser&&<li className="nav-item">
                <Link to="/course" className="nav-link">課程頁面</Link>
              </li>}
              {currentUser&&currentUser.user.role==="student"&&<li className="nav-item">
                <Link to="/enroll_course" className="nav-link">註冊課程</Link>
              </li>}
              {currentUser&&currentUser.user.role==="instructor"&&<li className="nav-item">
                <Link to="/add_course" className="nav-link">新增課程</Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
