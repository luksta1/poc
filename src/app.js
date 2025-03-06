import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from './components';
import { Routes } from './routes';
import './styles.css'

const App = () => {
  return (
    <Router basename="/">
      <header>
        <Nav />
      </header>
      <main>
        <Routes { ...window.xprops }/>
      </main>
    </Router>
  );
};

export default App;