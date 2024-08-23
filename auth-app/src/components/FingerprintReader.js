import '../styles/FingerprintReader.css';
import FingerprintIcon from './FingerprintIcon.js';
import Header from './Header.js';

export default function FingerprintReader() {

  return(
    <div className="auth-main-container">

        <Header />

        <section className="current-date-container">
          <h3 className="current-date">Hora:</h3>
          <h3 className="current-date-value">05:50 am</h3>
        </section>

        <section className="auth-body-container">

          <h2 className="instructive-message">
              Por favor ponga su huella!
          </h2>

          <FingerprintIcon />

        </section>

    </div>
  );
};
