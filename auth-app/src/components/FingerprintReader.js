import React, { useState, useEffect } from 'react';
import '../styles/FingerprintReader.css';
import Header from './Header.js';
import CurrentTime from './CurrentTime.js';
import FingerprintIcon from './FingerprintIcon.js';


/*
// Reader services
import {
  UareUDevice,
  createJWT,
  JWT_KEY,
  captureFingerprint
} from '@digitalpersona/services';
import {
  FingerprintReader,
  SampleFormat,
  DeviceConnected,
  DeviceDisconnected,
  SamplesAcquired
} from 'digitalpersona/devices';

export default function FingerprintReaderFn() {

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isListening, setIsListening] = useState(true);

  useEffect(() => {
    if (isListening) {
      startListening();
    }
    return () => setIsListening(false); // Cleanup on unmount
  }, [isListening]);

  const startListening = () => {
    // Set up an interval to continuously check for fingerprint input
    const listener = setInterval(async () => {
      const fingerprintData = await captureFingerprint();
      if (fingerprintData) {
        await handleFingerprintAuthentication(fingerprintData);
      }
    }, 1000); // Adjust the interval timing as needed

    // Cleanup the interval when the component unmounts or listening stops
    return () => clearInterval(listener);
  };

  const fingerprintToJWT = (fingerprintData) => {
    const payload = {
      fingerprint: fingerprintData,
    };
    const token = createJWT(payload, JWT_KEY);
    return token;
  };

  const handleFingerprintAuthentication = async (fingerprintData) => {
    setIsListening(false); // Stop listening while processing
    setShowModal(true);
    setModalData("Autenticando...");

    try {
      const fingerprintJWT = fingerprintToJWT(fingerprintData);
      const response = await fetch('/api/auth/fingerprint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': '48fdd9794d35198c4867fb0180252908cc742b18835545d4342ae9544748aa0d',
          'Authorization': `Bearer ${fingerprintJWT}`
        },
        body: JSON.stringify({ fingerPrintToken: fingerprintJWT }),
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setModalData(data.username ? `Bienvenido, ${data.username}` : 'Error de autenticación');
    } catch (error) {
      console.error('Error during fingerprint authentication:', error);
      setModalData('Error en el servidor');
    }

    setTimeout(() => {
      setShowModal(false);
      setModalData(null);
      setIsListening(true); // Restart listening after handling the response
    }, 3000);
  };

  return (
    <div className="auth-main-container">
      <Header />
      <CurrentTime />
      <section className="auth-body-container">
        <h2 className="instructive-message">
          Por favor ponga su huella!
        </h2>
        <FingerprintIcon />
        {showModal && (
          <div className="modal">
            <p>{modalData}</p>
          </div>
        )}
      </section>
    </div>
  );
}
*/

import { FingerprintReader, SampleFormat } from '@digitalpersona/devices';

const FingerprintTest = () => {
    const [status, setStatus] = useState('No device connected');
    const [fingerprint, setFingerprint] = useState(null);
    const [error, setError] = useState(null);

    // Function to check if the device is connected
    const checkDeviceConnection = () => {
        const reader = new FingerprintReader();

        reader.onDeviceConnected = (event) => {
            setStatus('Fingerprint reader connected: ' + event.device.id);
        };

        reader.onDeviceDisconnected = (event) => {
            setStatus('Fingerprint reader disconnected.');
        };

        reader.startAcquisition(SampleFormat.PngImage)
            .then(() => {
                setStatus('Device ready for fingerprint capture');
            })
            .catch((err) => {
                setError('Failed to start acquisition: ' + err.message);
            });
    };

    // Function to capture the fingerprint
    const captureFingerprint = () => {
        const reader = new FingerprintReader();

        reader.capture(SampleFormat.PngImage)
            .then((sample) => {
                setFingerprint(sample.samples[0]);
                setError(null);
                setStatus('Fingerprint captured successfully');
            })
            .catch((err) => {
                setError('Fingerprint capture failed: ' + err.message);
            });
    };

    return (
        <div>
            <h2>Fingerprint Reader Test</h2>
            <p>Status: {status}</p>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <button onClick={checkDeviceConnection}>Check Device Connection</button>
            <button onClick={captureFingerprint}>Capture Fingerprint</button>
            {fingerprint && (
                <div>
                    <h3>Captured Fingerprint:</h3>
                    <img src={`data:image/png;base64,${fingerprint}`} alt="Fingerprint" />
                </div>
            )}
        </div>
    );
};

export default FingerprintTest;
