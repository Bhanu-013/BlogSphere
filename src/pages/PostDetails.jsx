import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommentSection from "../components/CommentSection";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(console.error);
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="card shadow-lg p-4">

          <h1>{post.title}</h1>

          <p className="text-muted">
            Written by {post.author}
          </p>

          <hr />

          <p style={{ fontSize: "18px" }}>
            {post.content}
          </p>

        </div>

        <CommentSection postId={id} />
      </div>

      <Footer />
    </>
  );
}

export default PostDetails;