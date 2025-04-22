import React from 'react';
import './App.css';
import Saludo from './components/Saludo'; // Import the Saludo component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola, React!</h1>
        <p>Bienvenido a tu primer proyecto React.</p>
        <Saludo /> {/* Include the Saludo component */}
      </header>
    </div>
  );
}

export default App;
