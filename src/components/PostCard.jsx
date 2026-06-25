import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="card blog-card shadow-sm h-100">
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"
        className="card-img-top"
        alt="Blog"
      />

      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>

        <p className="card-text text-muted">
          {post.content.substring(0, 120)}...
        </p>

        <p>
          <strong>Author:</strong> {post.author}
        </p>

        <Link
          className="btn btn-primary"
          to={`/post/${post._id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;