import React, { useState } from 'react';
import './post.css';

export default function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const displayComments = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
      const data = await response.json();
      setComments(data);
      setShowComments(true);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div className="post-container">
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <img
          src={`https://picsum.photos/200/300?random=${post.id}`}
          alt="Post"
          className="post-image"
        />
        <p className="post-body">{post.body}</p>
        <div className="comments-container">
          <button onClick={displayComments} className="fetch-button">
            Display Comments
          </button>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p className="comment-name" style={{color:"red"}}><strong>{comment.name}</strong></p>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
