import '../styles/App.css';
import Form from "../components/LoginForm.js";
import LogoWelcome from "../components/LoginLogo.js";

function App() {
  return (
    <>
      <div className="main-cards-container">
        <LogoWelcome/>
        <Form/>
      </div>
    </>
  )
}

export default App;
