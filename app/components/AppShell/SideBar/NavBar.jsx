import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const List = styled.ol`
  padding: 8px 0 8px 24px;
  list-style: none;
`;

export default function NavBar({ data, linkComponent }) {
  return (
    <List>
      {data.map(({ children, ...rest }) => {
        return (
          <NavItem {...rest}>
            {children && children.length ? (
              <NavBar data={children} linkComponent={linkComponent} />
            ) : null}
          </NavItem>
        );
      })}
    </List>
  );
}
