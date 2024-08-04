import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(error => console.error('Error fetching the API:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, Admin Panel!</p>
        <p>API Test: {apiMessage}</p>
      </header>
    </div>
  );
}

export default App;

