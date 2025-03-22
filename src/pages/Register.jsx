import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" className="form-control mb-2" />
        <input type="email" placeholder="Email" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <button className="btn btn-primary">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;

