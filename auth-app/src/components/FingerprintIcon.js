import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import '../styles/FingerprintIcon.css';

export default function FingerprintIcon() {
  return (
    <div className='fingerprint-icon-container'>
      <FontAwesomeIcon
        icon={faFingerprint}
        size="5x"
        className='fingerprint-icon'
      />
    </div>
  );
}
