import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../css/Login.css'


const Mylogin = () => {
  const [email, setEmail] = useState("swapnu@123");
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate();

  const onLogin = async () => {
    // Client-side validations
    if (email.length === 0) {
      toast.warning("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Password can't be blank");
    } else {
      // API call
      const response = await login(email, password);
      // Check for valid response/successful
      if (response["status"] === "success") { // Ensure "success" is a string
        // Get the token from json.data
        const data = response["data"];
        const token = data["jwt"];

        // Store this token in browser's session
        sessionStorage["token"] = token;
        toast.success("Logged in successfully");

        // After successful authentication, dynamically navigate to homepage
        navigate("/");
      } else {
        toast.error(response["error"]);
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="login-background login-form"> 
      <div className="container d-flex justify-content-center align-items-center min-vh-100 .">
        <div className="row w-100">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <div className="p-4 rounded shadow login-form">
              <h2 className="text-center">Login</h2>

              <label htmlFor="email">Username</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
                type="email"
                name="email"
                id="email"
              />

              <label htmlFor="pass">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-4"
                type="password"
                name="pass"
                id="pass"
              />

              <p className="text-center mt-2">
                Don't Have an Account? <Link to="/register">Register here</Link>
              </p>

              <p className="text-center">
                Forgot Password? <Link to="/forgot-password">Reset here</Link>
              </p>

              <input
                onClick={onLogin}
                className="w-100 btn btn-outline-success mt-2"
                type="button"
                value="Login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mylogin;