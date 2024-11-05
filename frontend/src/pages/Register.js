// src/pages/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import { registerUser } from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password });
      alert('Usuario registrado con éxito');
      window.location.href = '/login'; // Redirigir a la página de inicio de sesión
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrar</button>
      </form>

      {/* Enlace para volver a la página principal */}
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-link">Volver a la página principal</Link>
      </div>
    </div>
  );
}

export default Register;
