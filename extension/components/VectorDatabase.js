import React, { useEffect, useState } from 'react';
import { activeloop } from '../lib/activeloop';

function VectorDatabase() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const vectorData = await activeloop.get('VectorData');
      setData(vectorData);
    }
    fetchData();
  }, []);

  return (
    <div id="vector-database">
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default VectorDatabase;