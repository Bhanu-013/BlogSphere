import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Bhanu");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/posts", {
        title,
        author,
        content,
      });

      alert("Blog Published Successfully!");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to publish blog");
    }
  };

  return (
    <>
      <Navbar />

      <div className="create-page">
        <div className="container py-5">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">

              <h1 className="fw-bold mb-2">
                ✍️ Create New Blog
              </h1>

              <p className="text-muted mb-4">
                Share your thoughts with the world.
              </p>

              <form onSubmit={submit}>

                <div className="mb-4">
                  <label className="form-label fw-bold">
                    Blog Title
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter blog title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">
                    Author
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">
                    Blog Content
                  </label>

                  <textarea
                    rows="12"
                    className="form-control"
                    placeholder="Write your blog here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>

                <button
                  className="btn btn-primary btn-lg px-5"
                  type="submit"
                >
                  Publish Blog
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreatePost;