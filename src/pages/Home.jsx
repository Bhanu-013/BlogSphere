import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then((res) => setPosts(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center text-white">
          <h1 className="display-2 fw-bold">
            Welcome to BlogSphere
          </h1>

          <p className="lead mt-3">
            Create, Read and Share Amazing Blogs
          </p>

          <div className="mt-4">
            <Link to="/create" className="btn btn-warning btn-lg me-3">
              Create Blog
            </Link>

            <Link to="/register" className="btn btn-outline-light btn-lg">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="container py-5">
        <h2 className="text-center mb-5">Platform Features</h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="feature-box shadow">
              <h1>✍️</h1>
              <h4>Create Blogs</h4>
              <p>Publish blogs and share knowledge.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-box shadow">
              <h1>💬</h1>
              <h4>Comments</h4>
              <p>Readers can interact through comments.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-box shadow">
              <h1>🔒</h1>
              <h4>Secure Login</h4>
              <p>JWT based authentication system.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Latest Blogs */}
      <div className="container py-5">
        <h2 className="mb-4">Latest Blogs</h2>

        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="about-section">
        <div className="container text-center">
          <h2>About BlogSphere</h2>

          <p className="mt-3">
            BlogSphere is a full-stack blogging platform built using
            React, Node.js, Express.js and MongoDB.
            Users can register, login, create blogs and interact through comments.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;