import LogoSmall from './LogoSmall.js';
import '../styles/Header.css';

export default function Header() {

  return (
    <section className='header-container'>
      <div className="header-message-container">
        <h1 className="welcome-title">
          Hola, buenos días
        </h1>

        <h2 className="welcome-message">
          Institución Educativa Nuestra Señora de Chiquinquirá
        </h2>
      </div>
      <LogoSmall />
    </section>
  );

}
