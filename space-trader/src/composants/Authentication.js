import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Auth.css'

const Authentication = () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const ChangerToken = (e) => {
    setToken(e.target.value);
  };

  const seLoguer = async () => {
    try {
      const reponse = await axios.post('https://api.spacetraders.io/users/login', { token });
      console.log('Authentification réussie!');
    } catch (error) {
      setError('Échec de l\'authentification. Vérifiez vos identifiants de connexion et réessayaer.');
    }
  };

  return (
    <div>
      <h2>Connecter vous à <br/> votre espace </h2>
      <div>
        <input type="text" id="token" placeholder="Entrez votre token authentification" value={token} onChange={ChangerToken} />
      </div>
      <button onClick={seLoguer}>Se connecter</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
export default Authentication;
