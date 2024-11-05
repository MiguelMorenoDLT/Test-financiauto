// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import { getPosts, createPost, deletePost } from '../services/api';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost({ title, content });
      setPosts([...posts, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error al crear la publicación:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error al eliminar la publicación:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>

      <form onSubmit={handleCreatePost} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Contenido"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Crear Publicación</button>
      </form>

      <h3>Publicaciones</h3>
      <div className="list-group mb-4">
        {posts.map(post => (
          <div key={post.id} className="list-group-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <button 
              onClick={() => handleDeletePost(post.id)} 
              className="btn btn-danger"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {/* Enlace para volver a la página principal */}
      <div className="text-center">
        <Link to="/" className="btn btn-link">Volver a la página principal</Link>
      </div>
    </div>
  );
}

export default Dashboard;
