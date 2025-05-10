import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../utils/api';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(res => setBlogs(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Blogs</h2>
      <Link to="/create">Create New Blog</Link>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}