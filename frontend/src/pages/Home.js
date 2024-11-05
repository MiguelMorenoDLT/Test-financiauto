import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bienvenido a la Aplicación</h1>
      <nav className="d-flex justify-content-center">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/register" className="nav-link">Registro</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Iniciar Sesión</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">Perfil</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
