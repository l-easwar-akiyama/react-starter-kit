import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import Flex from 'components/Flex';
import { Link } from 'components/Typography';
import Header from 'components/AppShell/Header';
import SideBar from 'components/AppShell/SideBar';
import Overlay from 'components/Overlay';

const Social = styled.div`
  margin-left: auto;
  transform: translateX(-240px);
  transition: transform 0.5s;
  will-change: transform;

  @media (max-width: 900px) {
    transform: translateX(0);
  }
`;

const FontLink = styled(Link)`
  color: inherit;
  background-color: transparent;
  margin: 0 10px;
  margin-left: auto;
`;

const HeaderWrapper = styled(Flex)`
  position: fixed;
  height: 64px;
  padding: 0 24px;
  color: white;
  top: 0;
  right: 0;
  left: 0;
  transform: translateX(240px);
  background-color: #2196f3;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 400;
  transition: transform 0.5s;
  will-change: transform;

  @media (max-width: 900px) {
    transform: translateX(0);
  }
`;

const Nav = styled(Flex)`
  position: fixed;
  height: 100%;
  width: 240px;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1000;
  transition: transform 0.5s;
  will-change: transform;

  @media (max-width: 900px) {
    transform: translateX(${props => (props.showOnToggle ? 0 : '-240px')});
  }
`;

const NavMock = styled.div`
  width: 240px;
  transition: width 0.5s;
  will-change: width;

  @media (max-width: 900px) {
    width: 0;
  }
`;

const Main = styled(Flex)`
  margin-top: 64px;
  padding: 30px 40px;
`;

export default function({ pageName, appName, appVersion, navData, linkComponent, children }) {
  const [showOnToggle, setShowOnToggle] = useState(false);
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 900px)');
    mediaQueryList.addListener(evt => {
      if (evt.matches) {
        setShowOnToggle(false);
      }
    });
  }, []);
  const handleBurgerMenuClick = useCallback(() => {
    setShowOnToggle(prevShowOnToggle => !prevShowOnToggle);
  }, []);

  return (
    <>
      <HeaderWrapper as="header">
        <Header title={pageName} onBurgerMenuClick={handleBurgerMenuClick}>
          <Social>
            <FontLink
              href="https://github.com/l-easwar-akiyama/react-starter-kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </FontLink>
            <FontLink
              href="https://medium.com/@easwarmec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} size="lg" />
            </FontLink>
          </Social>
        </Header>
      </HeaderWrapper>
      <Nav as="nav" flexDirection="column" flexGrow={1} showOnToggle={showOnToggle}>
        <SideBar
          title={appName}
          version={appVersion}
          data={navData}
          linkComponent={linkComponent}
        />
        <Overlay show={showOnToggle} onClick={handleBurgerMenuClick} />
      </Nav>
      <NavMock />
      <Main as="main" flexDirection="column" flex={1}>
        {children}
      </Main>
    </>
  );
}
