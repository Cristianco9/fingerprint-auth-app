import React, { useState, useEffect } from 'react';
import LogoSmall from './LogoSmall.js';
import '../styles/Header.css';

export default function Header() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greetingMessage = '';

    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = 'Hola, buenos días';
    } else if (currentHour >= 12 && currentHour < 19) {
      greetingMessage = 'Hola, buenas tardes';
    } else {
      greetingMessage = 'Hola, buenas noches';
    }

    setGreeting(greetingMessage);
    // Empty dependency array to run this effect only once on component mount
  }, []);

  return (
    <section className="header-container">
      <div className="header-message-container">
        <h1 className="welcome-title">
          {greeting}
        </h1>
        <h2 className="welcome-message">
          Institución Educativa Nuestra Señora de Chiquinquirá
        </h2>
      </div>
      <LogoSmall />
    </section>
  );
}
