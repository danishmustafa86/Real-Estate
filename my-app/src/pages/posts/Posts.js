import React, { useState, useEffect } from 'react';
import './posts.css';
import Post from '../../components/post';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../store/slices/posts.slice';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.postsSlice.posts);
  const error = useSelector((store) => store.postsSlice.error);
  const [visibleCount, setVisibleCount] = useState(4); // Show 4 initially

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4); // Load 4 more posts
  };

  return (
    <div className="posts-wrapper">
      <h1>Check out our Facebook Posts for Renting Houses, Garments, and Software Services</h1>
      <h2>Posts</h2>
      {error && <p style={{ color: 'red' }}>Error fetching posts: {error}</p>}
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.slice(0, visibleCount).map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
      {visibleCount < posts.length && (
        <button className="load-more-button" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
