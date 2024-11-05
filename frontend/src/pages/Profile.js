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
    <div>
      <h2>Perfil</h2>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Actualizar Perfil</button>
      </form>
    </div>
  );
}

export default Profile;