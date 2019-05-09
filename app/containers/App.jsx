import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, AppShell } from 'components';
import loadable from '@loadable/component';

const nav = [
  { title: 'Intro', url: '/' },
  { title: 'Live Editor', url: '/editor' },
  { title: 'Dead End', url: '/dead' },
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

const IntroAsync = loadable(() => import('./Intro'));
const NoMatchAsync = loadable(() => import('./NoMatch'));
// const SandboxAsync = loadable(() => import('./Sandbox'));

function Welcome() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppShell pageName="Home" appName="React UI Toolkit" appVersion="0.0.0" navData={nav}>
          <Switch>
            <Route exact path="/" component={IntroAsync} />
            {/* <Route exact path="/editor" component={SandboxAsync} /> */}
            <Route component={NoMatchAsync} />
          </Switch>
        </AppShell>
      </BrowserRouter>
    </>
  );
}

export default hot(Welcome);
