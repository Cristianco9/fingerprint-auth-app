import LogoLargeJPG from '../assets/icons/logoLarge.jpg';
import '../styles/LogoLarge.css';

export default function IENSCLogo() {

  return (
    <div className="logo-container">
      <picture className="logo">
        <img src={LogoLargeJPG} alt="Logo de una institución educativa"/>
      </picture>
    </div>
  );
}
