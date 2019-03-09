import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Main, Header, Paragraph } from '../components';

function Welcome() {
  return (
    <Main>
      <Header>Welcome to Sama&#39;s React component library</Header>
      <Paragraph>This is a test paragraph to showcase the typography components</Paragraph>
    </Main>
  );
}

export default hot(Welcome);
