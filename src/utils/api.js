// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5000/api',
// });

// export const register = (data) => API.post('/auth/register', data);
// export const login = (data) => API.post('/auth/login', data);


import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);

export const fetchBlogs = () => {
  const token = localStorage.getItem('token');
  return API.get('/blogs', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createBlog = (data, token) =>
  API.post('/blogs', data, { headers: { Authorization: `Bearer ${token}` } });

export const fetchBlogDetails = (id) => API.get(`/blogs/${id}`);
export const addComment = (blogId, data, token) =>
  API.post(`/blogs/${blogId}/comments`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
