import React, { useState } from 'react';
import { createBlog } from '../utils/api';

export default function BlogCreate() {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await createBlog(form, token);
      alert('Blog created');
      window.location.href = '/';
    } catch (err) {
      alert('Creation failed: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
