import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginSignup.css";
import {useNavigate} from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const LoginSignup = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const { username, password, email, confirmPassword } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    if (username.length <= 5) {
      alert("username name must be atleast 5 Characters");
    } else if (password !== confirmPassword) {
      alert("Passwords are not matching");
    } else {
      navigate ("/Home")
    }
  };
  return (
    <div className="bg">
      <div className="d-flex flex-row ">
       <AiOutlineShoppingCart fontSize="50px" className="p-1 m-3 icon"/>
      <h1 className="cart d-flex align-items-left p-3">Shopping Cart</h1>
      </div>
      <div className="d-flex align-items-center justify-content-end w-100 p-5">
        <div className="login rounded">
          <h2 className="mb-3 log">Login </h2>
          <form
            className="needs-validation"
            autoComplete="off"
            onSubmit={submitHandler}
          >
            <div className="form-group was-validated mb-2">
              <label htmlFor="text" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={changeHandler}
                className="form-control"
                required
              ></input>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="email" className="form-label">
                Email Adress
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={changeHandler}
                className="form-control"
                required
              ></input>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={changeHandler}
                className="form-control"
                required
              ></input>
            </div>

            <div className="form-group was-validated mb-2">
              <label htmlFor="password" className="form-label">
                ConfirmPassword
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={changeHandler}
                className="form-control"
                required
              ></input>
            </div>
            {password !== confirmPassword ? (
              <p>passwords not Matching</p>
            ) :  null}
            <input type="submit" name="submit" />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default LoginSignup;
