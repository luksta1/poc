import React from 'react';
import { createRoot } from 'react-dom/client';
import { EchoIframe } from './components';
import App from './app';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
    <EchoIframe>
      <App { ...window.xprops }/>
    </EchoIframe>
);