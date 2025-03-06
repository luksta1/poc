import React from 'react';
import { createRoot } from 'react-dom/client';
import { EchoInitializer } from './components';
import App from './app';

const element = document.getElementById('root');
const root = createRoot(element);

EchoInitializer();

root.render(
    <App />
);