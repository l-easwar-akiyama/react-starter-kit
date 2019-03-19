import React from 'react';
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

export default class extends React.Component {
  state = { showOverlay: true };

  handleOverlayClick = () => {
    if (this.props.onClick) this.props.onClick();
  };

  handleTransitionEnd = () => {
    this.setState({ showOverlay: this.props.show });
  };

  render() {
    return ReactDOM.createPortal(
      <StyledOverlay
        onClick={this.handleOverlayClick}
        hide={!this.props.show}
        showOverlay={this.props.show || this.state.showOverlay}
        onTransitionEnd={this.handleTransitionEnd}
      />,
      document.body
    );
  }
}
