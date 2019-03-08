import React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '../components/Button';

function Welcome() {
  return (
    <div>
      <h1>Hello World from React boilerplate</h1>
      <Button>Test</Button>
    </div>
  );
}

export default hot(Welcome);
