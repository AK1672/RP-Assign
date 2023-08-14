import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container">
        <p>Login to your account</p>
        <form class="row g-3 needs-validation">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required=""
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            <Link
              to="/SubPlan"
              className="btn btn-primary"
              role="button"
              style={{ width: "100%" }}
            >
              {" "}
              Login
            </Link>
          </button>
        </form>
        <p>
          New to MyAPP? <Link to="/Signup"> Sign Up</Link>{" "}
        </p>
      </div>
    </>
  );
}
