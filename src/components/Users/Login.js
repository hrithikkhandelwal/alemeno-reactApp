import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../redux/reducers/userReducer";
import loginCss from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function fetchLogin(e) {
    const user = {
      email: email,
      password: password,
    };

    const url = `http://localhost:3100/api/user`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          alert("Email or Password is Invalid! \nLogin Again");
          e.preventDefault();
          return;
        }
        dispatch(userActions.get(data[0]));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={loginCss.loginContainer}>
      <input
        type="text"
        placeholder="Enter Email"
        className={loginCss.loginInput}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        className={loginCss.loginInput}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Link to="courses" className={loginCss.loginLink} onClick={fetchLogin}>
        Login
      </Link>
    </div>
  );
}
