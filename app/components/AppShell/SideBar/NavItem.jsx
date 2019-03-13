import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 4px 0;
`;

export default function NavItem({ title, url, linkComponent: Link, children }) {
  return (
    <ListItem>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </Link>
      {children}
    </ListItem>
  );
}

NavItem.defaultProps = { linkComponent: 'a' };
