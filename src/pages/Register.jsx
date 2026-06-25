import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
      console.log(error);
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
                    Create Account
                  </h1>

                  <p className="text-center text-muted mb-4">
                    Join BlogSphere and start sharing your ideas.
                  </p>

                  <form onSubmit={submit}>

                    <div className="mb-3">
                      <label className="form-label">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value
                          })
                        }
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value
                          })
                        }
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
                        placeholder="Enter password"
                        onChange={(e) =>
                          setForm({
                            ...form,
                            password: e.target.value
                          })
                        }
                        required
                      />
                    </div>

                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                    >
                      Register
                    </button>

                  </form>

                  <div className="text-center mt-4">
                    Already have an account?
                    <Link
                      to="/login"
                      className="ms-2 text-decoration-none"
                    >
                      Login
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

export default Register;