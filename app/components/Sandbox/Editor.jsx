import React from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor } from 'react-live';

const Container = styled.div`
  height: ${props => props.height || 'auto'};
  overflow: auto;
  background-color: #1d1f27;
  border-radius: 3px;
  font-size: 1.2rem;

  & > div {
    min-height: ${props => props.height || 'auto'};
  }

  & textarea {
    caret-color: white;
    outline: 0;
    cursor: text;
  }
`;
Container.defaultProps = { height: '300px' };

export default function Editor({ code, onChangeCode, ...rest }) {
  return (
    <Container {...rest}>
      <LiveProvider code={code}>
        <LiveEditor onChange={onChangeCode} />
      </LiveProvider>
    </Container>
  );
}
