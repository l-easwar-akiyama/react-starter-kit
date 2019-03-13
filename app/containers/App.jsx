import React from 'react';
import { hot } from 'react-hot-loader/root';
import { GlobalStyle, Text, AppShell } from 'components';

const nav = [
  { title: 'Greeting1', url: 'https://www.google.com' },
  { title: 'Greeting2', url: 'https://www.google.com' },
  {
    title: 'Greeting3',
    url: 'https://www.google.com',
    children: [
      { title: 'Greeting4', url: 'https://www.google.com' },
      { title: 'Greeting5', url: 'https://www.google.com' },
      { title: 'Greeting6', url: 'https://www.google.com' },
    ],
  },
];

function Welcome() {
  return (
    <>
      <GlobalStyle />
      <AppShell pageName="Home" appName="React UI Toolkit" appVersion="0.0.0" navData={nav}>
        <h3>Welcome to Sama&#39;s React component library</h3>
        <Text as="p">This is a test paragraph to showcase the typography components</Text>
      </AppShell>
    </>
  );
}

export default hot(Welcome);
