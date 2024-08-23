import Logo from './LogoLarge'
import '../styles/LoginLogo.css';

export default function LogoWelcome() {
  return(
    <div className="main-card">
      <h1 className="title-name">
        I.E Nuestra Señora de Chiquinquirá
      </h1>
      <Logo/>
    </div>
  );
};
