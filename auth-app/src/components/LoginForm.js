import React, { useState } from 'react';
import '../styles/LoginForm.css';
import LoginServerError from './LoginServerError';
import { sendLoginRequest } from './api';

export default function Form() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [errorDetails, setErrorDetails] = useState({
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);

    try {
      const response = await submitLoginForm(formData);

      // Handle success
      // Add your success logic here



    } catch (error) {
      // Assuming error contains the JSON response from the server
      if (error.statusCode === 404 && error.error === 'Not Found') {
        setErrorDetails({
          title: 'Datos incorrectos',
          message: error.message, // Display message from server response
        });
        setShowModal(true);
      } else if (error.statusCode === 401 && error.error === 'Unauthorized') {
        setErrorDetails({
          title: 'Datos incorrectos',
          message: error.message, // Display message from server response
        });
        setShowModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    // Clear the form data
    setFormData({
      username: '',
      password: '',
    });
    // Close the modal
    setShowModal(false);
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-main-container">
          <h1 className="title-welcome">Bienvenido</h1>
          <p className="sub-title">Por favor inicia sesión</p>

          <div className="fields-container">
            <InputField
              label="Usuario"
              id="username"
              value={formData.username}
              placeholder="ingrese su usuario"
              onChange={handleChange}
            />
            <InputField
              label="Contraseña"
              id="password"
              type="password"
              value={formData.password}
              placeholder="ingrese su contraseña"
              onChange={handleChange}
            />
          </div>

          <button type="button" className="forgot-password-btn">
            Olvidé la contraseña
          </button>

          <button type="submit" className="sign-in-btn">
            Ingresar
          </button>
        </div>
      </form>

      {showModal && (
        <LoginServerError
          title={errorDetails.title}
          message={errorDetails.message}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

function InputField({ label, id, value, placeholder, onChange, type = 'text' }) {
  return (
    <div className="form-element">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="value-input"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

async function submitLoginForm(formData) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    throw new Error('Request timed out');
  }, 5000);

  try {
    const response = await sendLoginRequest(formData, { signal });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw response;
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error; // Rethrow the error to be caught by handleSubmit
  }
}
