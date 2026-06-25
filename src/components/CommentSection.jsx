import { useEffect, useState } from "react";
import api from "../services/api";

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const fetchComments = async () => {
    try {
      const res = await api.get(`/comments/${postId}`);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const addComment = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      await api.post("/comments", {
        text,
        postId,
        user: "Bhanu"
      });

      setText("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-body">
        <h4 className="mb-3">Comments</h4>

        <form onSubmit={addComment}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">
            Add Comment
          </button>
        </form>

        <hr />

        {comments.length === 0 ? (
          <p className="text-muted">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="border rounded p-3 mb-2"
            >
              <h6 className="mb-1">
                {comment.user}
              </h6>

              <p className="mb-0">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CommentSection;