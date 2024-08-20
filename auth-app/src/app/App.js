import React, { useState } from 'react';
import '../styles/App.css';
import Form from "../components/LoginForm.js";
import LogoWelcome from "../components/LoginLogo.js";

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <>
      <div className="main-cards-container">
        {!loggedIn && <LogoWelcome />}
        <Form setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      </div>
    </>
  )
}

export default App;
