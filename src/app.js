import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from './components';
import { Routes } from './routes';
import './styles.css'

const App = ({ hideNav, onNavigate, parentRoute, onProps }) => {
  return (
    <Router basename="/">
      {!hideNav && (
        <header>
          <Nav />
        </header>
      )}
      <main>
        <Routes hideNav={hideNav} onNavigate={onNavigate} parentRoute={parentRoute} onProps={onProps} />
      </main>
    </Router>
  );
};

export default App;