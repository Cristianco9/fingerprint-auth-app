import '../styles/FingerprintReader.css';
import Header from './Header.js';
import CurrentTime from './CurrentTime.js';
import FingerprintIcon from './FingerprintIcon.js';

export default function FingerprintReader() {

  return(
    <div className="auth-main-container">

        <Header />
        <CurrentTime />

        <section className="auth-body-container">

          <h2 className="instructive-message">
              Por favor ponga su huella!
          </h2>

          <FingerprintIcon />

        </section>

    </div>
  );
};
