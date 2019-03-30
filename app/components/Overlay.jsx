import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

const overlay = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #282828;
  z-index: 500;
`;

const StyledOverlay = styled.div`
  ${props => (props.showOverlay ? overlay : '')};
  pointer-events: ${props => (props.hide ? 'none' : '')};
  opacity: ${props => (props.hide ? 0 : 0.75)};
  transition: opacity 0.5s;
`;

export default function({ show, ...rest }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const handleTransitionEnd = useCallback(() => {
    setShowOverlay(show);
  }, [show]);

  return ReactDOM.createPortal(
    <StyledOverlay
      hide={!show}
      showOverlay={show || showOverlay}
      onTransitionEnd={handleTransitionEnd}
      {...rest}
    />,
    document.body
  );
}
