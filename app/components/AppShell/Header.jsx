import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Flex from 'components/Flex';

const BurgerMenu = styled(FontAwesomeIcon)`
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

const Title = styled.h6`
  margin: 0 24px;
  color: inherit;
`;

export default function({ title, onBurgerMenuClick, children }) {
  return (
    <Flex flexGrow={1} justifyContent="end" alignItems="center">
      <BurgerMenu icon={faBars} color="black" onClick={onBurgerMenuClick} />
      <Title>{title}</Title>
      {children}
    </Flex>
  );
}
