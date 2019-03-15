import React from 'react';
import styled from 'styled-components';
import Flex from 'components/Flex';
import { Caption } from 'components/Typography';
import NavBar from './NavBar';

const NavHeader = styled(Flex)`
  height: 64px;
  padding: 0 20px;
`;

export default function({ title, version, data, linkComponent }) {
  return (
    <>
      <NavHeader flexDirection="column" justifyContent="center">
        <h6>{title}</h6>
        <Caption>{version}</Caption>
      </NavHeader>
      <hr />
      <NavBar data={data} linkComponent={linkComponent} />
    </>
  );
}
