// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { updateProfile } from '../services/api';

function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Aquí puedes cargar la información del perfil si tu backend lo soporta
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ username, email });
      alert('Perfil actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      alert('Error al actualizar el perfil');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Perfil</h2>
      <form onSubmit={handleUpdateProfile} className="mx-auto" style={{ maxWidth: '400px' }}>
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
        <button type="submit" className="btn btn-success w-100">Actualizar Perfil</button>
      </form>
    </div>
  );
}

export default Profile;
