import React, { useState } from 'react';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

interface LoginFormData {
  mail: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    mail: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/utilisateur/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Login successful
        onLoginSuccess();
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Creation de compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom d'utilisateur:
            <input
              type="text"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Mot de passe:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default LoginForm;
