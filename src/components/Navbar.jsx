import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          BlogSphere
        </Link>

        <div>
          <Link className="btn btn-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-light me-2" to="/register">
            Register
          </Link>

          <Link className="btn btn-light me-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-warning" to="/create">
            Create Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;