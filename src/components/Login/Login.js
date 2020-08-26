import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <h3 className="text-center text-danger">Login</h3>
        <form className="login-form">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
