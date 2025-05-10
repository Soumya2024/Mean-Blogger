import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import BlogList from './pages/BlogList';
import BlogCreate from './pages/BlogCreate';
import BlogDetails from './pages/BlogDetails';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<PrivateRoute><BlogCreate /></PrivateRoute>} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}