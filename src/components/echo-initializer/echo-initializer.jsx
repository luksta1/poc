import React from 'react';
import ReactDOM from 'react-dom';
import * as zoid from 'zoid/dist/zoid.frameworks';

const EchoInitializer = zoid.create({
  tag: 'echo',
  url: 'https://golden-gelato-35f8d3.netlify.app',
});

export const EchoIframe = EchoInitializer.driver('react', {
  React: React,
  ReactDOM: ReactDOM.render,
});