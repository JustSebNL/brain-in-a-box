import React, { useState } from 'react';
import { captureMHTML } from '../utils/mhtmlCapture';
import { saveToVector } from '../utils/vectorStore';

const WebsiteCapture = () => {
  const [status, setStatus] = useState('');

  const handleCapture = async () => {
    setStatus('Capturing...');
    try {
      const mhtml = await captureMHTML();
      await saveToVector(mhtml);
      setStatus('Capture successful!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div id="website-capture">
      <button onClick={handleCapture}>Capture Website</button>
      <p>{status}</p>
    </div>
  );
};

export default WebsiteCapture;