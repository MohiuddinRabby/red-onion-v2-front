import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
firebase.initializeApp(firebaseConfig);
const Signup = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log("auth login");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="sign-page">
      <div className="container">
        <h3 className="text-center text-danger">Sign up</h3>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              email="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              name="password2"
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={handleCreateAccount}
          >
            Submit
          </button>
          <Link to="/login" style={{ marginLeft: "100px" }}>
            Alreadey have an account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
