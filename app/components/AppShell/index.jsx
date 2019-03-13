/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import Flex from 'components/Flex';
import Header from './Header';
import SideBar from './SideBar';

const Main = styled(Flex)`
  margin: 64px 0 0 240px;
  padding: 30px 40px;
`;

export default class extends React.Component {
  render() {
    const { pageName, appName, appVersion, navData, linkComponent, children } = this.props;
    return (
      <>
        <Header title={pageName} />
        <SideBar
          title={appName}
          version={appVersion}
          data={navData}
          linkComponent={linkComponent}
        />
        <Main as="main" flexDirection="column" flex={1}>
          {children}
        </Main>
      </>
    );
  }
}

/* eslint-enable */
