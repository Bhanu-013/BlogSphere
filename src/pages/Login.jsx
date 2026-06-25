import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">

            <div className="col-md-6">

              <div className="card auth-card shadow-lg">

                <div className="card-body p-5">

                  <h1 className="text-center fw-bold mb-3">
                    Welcome Back
                  </h1>

                  <p className="text-center text-muted mb-4">
                    Login to continue to BlogSphere
                  </p>

                  <form onSubmit={login}>

                    <div className="mb-3">
                      <label className="form-label">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Login
                    </button>

                  </form>

                  <div className="text-center mt-4">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="ms-2 text-decoration-none"
                    >
                      Register
                    </Link>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;