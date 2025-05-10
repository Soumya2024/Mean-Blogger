import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogDetails, addComment } from '../utils/api';

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchBlogDetails(id).then(res => setBlog(res.data)).catch(err => console.error(err));
  }, [id]);

  const handleComment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await addComment(id, { text: comment }, token);
      setComment('');
      fetchBlogDetails(id).then(res => setBlog(res.data));
    } catch (err) {
      alert('Failed to add comment');
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <h4>Comments</h4>
      <ul>
        {blog.comments.map((c, i) => (
          <li key={i}>{c.text}</li>
        ))}
      </ul>
      <form onSubmit={handleComment}>
        <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add comment" required />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}