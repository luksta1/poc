import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes as RouteContainer, Navigate, useLocation } from 'react-router-dom';
import { Content, Nav } from './components';
import './styles.css'

const App = ({ onNavigate }) => {
  const location = useLocation();

  useEffect(() => {
    onNavigate(location.pathname);
  }, [location]);

  return (
    <Router history={history}>
      <header>
        <Nav />
      </header>
      <main>
        <RouteContainer>
          <Route path="/app/echo/page-1" element={<Content pageId={1}/>} />
          <Route path="/app/echo/page-2" element={<Content pageId={2}/>} />
          <Route path="/app/echo/page-3" element={<Content pageId={3}/>} />
          <Route path="/" element={<Navigate to="/app/echo/page-1" />} />
        </RouteContainer>
      </main>
    </Router>
  );
};

export default App;