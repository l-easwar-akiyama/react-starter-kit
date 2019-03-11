import React from 'react';
import styled from 'styled-components';
import { Flex, Link } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const Header = styled(Flex)`
  position: fixed;
  height: 64px;
  padding: 0 24px;
  color: white;
  top: 0;
  right: 0;
  left: 250px;
  background-color: #2196f3;
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

const FontLink = styled(Link)`
  color: inherit;
  background-color: transparent;
  margin: 0 10px;
  margin-left: auto;
`;

export default function({ title, onBurgerMenuClick, ...props }) {
  return (
    <Header as="header" justifyContent="end" alignItems="center" {...props}>
      <BurgerMenu icon={faBars} color="black" onClick={onBurgerMenuClick} />
      <Title>{title}</Title>
      <div style={{ marginLeft: 'auto' }}>
        <FontLink
          href="https://github.com/l-easwar-akiyama/react-starter-kit"
          target="_blank"
          referrerpolicy="no-referrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </FontLink>
        <FontLink href="https://medium.com/@easwarmec" target="_blank" referrerpolicy="no-referrer">
          <FontAwesomeIcon icon={faMedium} size="lg" />
        </FontLink>
      </div>
    </Header>
  );
}
