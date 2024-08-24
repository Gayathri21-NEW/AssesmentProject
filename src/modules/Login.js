import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Man from "../assets/man.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (username, password) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username) {
      errors.username = "Username cannot be blank";
    } else if (!regex.test(username)) {
      errors.username = "Invalid format";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters long, include at least one capital letter, one number, and one symbol";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate form
    const validationErrors = validateForm(username, password);

    // Check if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      navigate("/home-page"); // Navigate to the desired page
    } else {
      setErrors(validationErrors); // Set errors to display on the form
    }

   
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

    if (errors.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "",
      }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (errors.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-2"></div>
        {/* Login Form Column */}
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="card p-4" style={{ width: "100%" }}>
            <h4 className="card-title mb-4 font-weight-[700px">Sign In</h4>
            <div className="row align-item-center">
              <div className="col">
                <span>New user ?</span>
                &nbsp;
                <span className="blue-text">Create an account</span>
              </div>
            </div>
            <br />
            <form onSubmit={handleSubmit} className="form-border">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control border-color"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Username or Email"
                />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control border-color"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  Keep me signed in
                </label>
              </div>
              <br />
              <div className="d-grid">
                <button type="submit" className="btn btn-color">
                  Sign In
                </button>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <span>Or Sign In With</span>
              </div>

              <div className="d-flex justify-content-center g-2 fontsize-large mt-4">
                <hr className="custom-hr" />
                &nbsp;&nbsp;
                <i className="bi bi-google icon-Size"></i>&nbsp;&nbsp;
                <i className="bi bi-facebook"></i>&nbsp;&nbsp;
                <i className="bi bi-linkedin"></i>&nbsp;&nbsp;
                <i className="bi bi-twitter"></i>&nbsp;&nbsp;
                <hr className="custom-hr" />
              </div>
            </form>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={Man} // Replace with your cartoon image URL
            alt="Cartoon Man"
            className="img-fluid"
            style={{ width: "350px", height: "400px" }}
          />
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Login;
