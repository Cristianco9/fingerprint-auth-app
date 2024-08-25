import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { jwtDecode } from 'jwt-decode';
import '../styles/App.css';
import Form from "../components/LoginForm.js";
import LogoWelcome from "../components/LoginLogo.js";

export default function App() {
  const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false);
  const [token, setToken] = useLocalStorage('token', '');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const isTokenExpired = decodedToken.exp * 1000 < Date.now();

        if (isTokenExpired) {
          setToken('');
          setLoggedIn(false);
        } else {
          setLoggedIn(true);

          // Periodically check if the token is expired
          const intervalId = setInterval(() => {
            const now = Date.now();
            if (decodedToken.exp * 1000 < now) {
              setToken('');
              setLoggedIn(false);
              clearInterval(intervalId); // Clear the interval if token expires
            }
          }, 1000); // Check every second (adjust if needed)

          return () => clearInterval(intervalId); // Clean up interval on unmount
        }
      } catch (error) {
        setToken('');
        setLoggedIn(false);
      }
    } else {
      setLoggedIn(false);
    }
  }, [token, setLoggedIn, setToken]);

  return (
    <>
      <div className="main-cards-container">
        {!loggedIn && <LogoWelcome />}
        <Form
          setLoggedIn={setLoggedIn}
          loggedIn={loggedIn}
          token={token}
          setToken={setToken}
        />
      </div>
    </>
  );
}
