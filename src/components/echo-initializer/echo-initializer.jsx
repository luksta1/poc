import * as zoid from 'zoid/dist/zoid.frameworks';

export const EchoInitializer = () => zoid.create({
  tag: 'echo',
  url: 'http://localhost:3000/index.html',
});
