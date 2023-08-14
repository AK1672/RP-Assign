import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="container">
        <p>Create Account</p>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input class="form-control" required=""/>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
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
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required=""
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
          <Link to='/' class="btn btn-primary"  role="button" style={{width:"100%"}}> Sign Up</Link>
          </button>
        </form>
        <p>
          Already have a Account? <Link to="/"> Login</Link>
        </p>
      </div>
    </>
  );
}
