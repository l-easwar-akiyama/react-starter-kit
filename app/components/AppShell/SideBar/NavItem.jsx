import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ListItem = styled.li`
  padding: 4px 0;
`;

export default function NavItem({ title, url, linkComponent: Link, children }) {
  return (
    <ListItem>
      <Link to={url}>{title}</Link>
      {children}
    </ListItem>
  );
}

NavItem.defaultProps = { linkComponent: NavLink };
