import React from 'react';
import { useRouter } from 'next/router';
import { supertokens } from '../lib/supertokens';
import { activeloop } from '../lib/activeloop';

export default function Options() {
  const router = useRouter();

  const handleLogout = async () => {
    await supertokens.logout();
    router.push('/');
  };

  const handleClearData = async () => {
    await activeloop.clear();
    alert('All data cleared from vector database.');
  };

  return (
    <div className="options">
      <button onClick={handleLogout} className="btn-logout">Logout</button>
      <button onClick={handleClearData} className="btn-clear-data">Clear Data</button>
    </div>
  );
}