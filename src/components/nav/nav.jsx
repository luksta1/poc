import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <h2>Echo</h2>
      <Link to="/app/overview">Parent</Link>
      <Link to="/app/echo/page-1">Page 1</Link>
      <Link to="/app/echo/page-2">Page 2</Link>
      <Link to="/app/echo/page-3">Page 3</Link>
    </nav>
  )
};