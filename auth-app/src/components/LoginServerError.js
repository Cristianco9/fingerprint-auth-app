import { createPortal } from 'react-dom';
import '../styles/modal.css';

export default function LoginServerError() {
  return createPortal(

    <div className="ModalBackground">
      <div className="ModalContent">
        <h2>Error</h2>
        <p>{"An unknown error occurred. Please try again later."}</p>
      </div>
    </div>,
    document.getElementById('modal')

  )
};
