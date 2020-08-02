import React, { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import logo from './logo.svg';
import './App.css';

function App() {
  const [title, useTitle] = useState('Concord');

  useEffect(() => {
    console.log('mount');
  }, [])

  function SetTitle() {
    useTitle('Discord');
  }

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {title}
        </p>
        <button onClick={SetTitle}>Change title</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
