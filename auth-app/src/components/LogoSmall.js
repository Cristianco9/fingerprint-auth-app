import LogoSmallJPG from '../assets/icons/logoSmall.jpg';
import '../styles/LogoSmall.css';

export default function IENSCLogo() {

  return (
    <div className="logo-small-container">
      <img src={LogoSmallJPG} alt="Logo" className="logo" />
    </div>
  );
}
