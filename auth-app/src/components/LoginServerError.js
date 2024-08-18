import { createPortal } from 'react-dom';
import '../styles/modal.css';

export default function LoginServerError({ onClose }) {
  return createPortal(
    <div className="ModalBackground">
      <div className="ModalContent">
        <h2 className="login-error-title">Servidor no disponible</h2>
        <p className="login-error-message">El servidor no esta disponible. Por favor contacte a soporte</p>
        <button className="accept-login-error-button" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
