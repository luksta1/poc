import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from './components';
import { Routes } from './routes';
import './styles.css'

const App = ({ onNavigate = () => null, parentRoute = null }) => {
  return (
    <Router history={history}>
      <header>
        <Nav />
      </header>
      <main>
        <Routes onNavigate={onNavigate} parentRoute={parentRoute} />
      </main>
    </Router>
  );
};

export default App;