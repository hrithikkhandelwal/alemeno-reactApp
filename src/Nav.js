import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "./redux/reducers/userReducer";
import { userActions } from "./redux/reducers/userReducer";
import nav from "./Nav.module.css";

export default function Nav() {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  function logout() {
    const user = {};
    dispatch(userActions.get(user));
  }

  return (
    <div>
      <div className={nav.navContainer}>
        <Link to="/courses" className={nav.link}>
          Courses
        </Link>
        {user && user.id ? (
          <Link to="/usercourses" className={nav.link}>
            Users Courses
          </Link>
        ) : (
          <></>
        )}
        {user && !user.id ? (
          <Link to="/" className={nav.link}>
            Login
          </Link>
        ) : (
          <Link to="/" className={nav.link} onClick={logout}>
            Logout
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
}
