import React from 'react';
import { hot } from 'react-hot-loader/root';
import { GlobalStyle, Main, Text, Header } from 'components';

function Welcome() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header title="App" />
      <Main>
        <h2>Welcome to Sama&#39;s React component library</h2>
        <Text as="p">This is a test paragraph to showcase the typography components</Text>
      </Main>
    </React.Fragment>
  );
}

export default hot(Welcome);
