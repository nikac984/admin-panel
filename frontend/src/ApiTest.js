import React, { useState, useEffect } from 'react';

const ApiTest = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://34.65.96.232:3000/api/test') // Fügen Sie die vollständige URL hinzu
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => setError(error.toString()));
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      {error ? <p>Error: {error}</p> : <p>{message}</p>}
    </div>
  );
};

export default ApiTest;

