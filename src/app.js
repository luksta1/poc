import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouteContainer, Navigate } from 'react-router-dom';
import { Content, Nav } from './components';
import './styles.css'

const history = window?.shared_history || null;

const Module = () => {
  return (
    <Router history={history}>
      <header>
        <Nav />
      </header>
      <main>
        <RouteContainer>
          <Route path="/page-1" element={<Content pageId={1}/>} />
          <Route path="/page-2" element={<Content pageId={2}/>} />
          <Route path="/page-3" element={<Content pageId={3}/>} />
          <Route path="/" element={<Navigate to="/page-1" />} />
        </RouteContainer>
      </main>
    </Router>
  );
};

export default Module;