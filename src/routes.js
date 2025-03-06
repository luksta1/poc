import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes as RouteContainer, Navigate, useLocation } from 'react-router-dom';
import { Content } from './components';

export const Routes = ({ onNavigate, parentLog, parentRoute }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    parentLog && parentLog(`${parentRoute}, ${location.pathname}`);
    if (parentRoute && location.pathname !== parentRoute) navigate(parentRoute);
  }, []);

  // useEffect(() => {
  //   if (location.pathname !== '/') onNavigate(location.pathname);
  // }, [location]);

  return (
    <RouteContainer>
      <Route path="/app/echo/page-1" element={<Content pageId={1}/>} />
      <Route path="/app/echo/page-2" element={<Content pageId={2}/>} />
      <Route path="/app/echo/page-3" element={<Content pageId={3}/>} />
      <Route path="*" element={<Navigate to="/app/echo/page-1" />} />
    </RouteContainer>
  )
};