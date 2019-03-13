import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'components/Typography';
import Flex from 'components/Flex';

const Header = styled(Flex)`
  position: fixed;
  height: 64px;
  padding: 0 24px;
  color: white;
  top: 0;
  right: 0;
  left: 240px;
  background-color: #2196f3;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1000;
`;

const BurgerMenu = styled(FontAwesomeIcon)`
  @media (min-width: 700px) {
    display: none;
  }
`;

const Title = styled.h6`
  margin: 0 24px;
  color: inherit;
`;

const Social = styled.div`
  margin-left: auto;
`;

const FontLink = styled(Link)`
  color: inherit;
  background-color: transparent;
  margin: 0 10px;
  margin-left: auto;
`;

export default function({ title, onBurgerMenuClick, ...props }) {
  return (
    <Header as="header" {...props}>
      <Flex flexGrow={1} justifyContent="end" alignItems="center">
        <BurgerMenu icon={faBars} color="black" onClick={onBurgerMenuClick} />
        <Title>{title}</Title>
        <Social>
          <FontLink
            href="https://github.com/l-easwar-akiyama/react-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </FontLink>
          <FontLink href="https://medium.com/@easwarmec" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} size="lg" />
          </FontLink>
        </Social>
      </Flex>
    </Header>
  );
}
