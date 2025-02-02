import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    //client side validations
    if (email.length == 0) {
      toast.warning("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Password can't be blanked");
    } else {
      //api call
      const response = await login(email, password);
      //check for valid response/successfull
      if (response["status"] === success) {
        //get the token from json.data
        const data = response["data"];
        const token = data["token"];

        //store this token in browser's session
        sessionStorage["token"] = token;
        toast.success("Logged in Success");

        //after success authentication dynamically navigate to homepage
        navigate("/homepage");
      } else {
        toast.error(response["error"]);
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <div className="p-4 rounded shadow">
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
    </>
  );
};

export default Login;
