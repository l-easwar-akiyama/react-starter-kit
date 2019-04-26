/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Flex from 'components/Flex';
import Input from 'components/Input';
import { Text } from 'components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faCut } from '@fortawesome/free-solid-svg-icons';

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const Panel = styled.div`
  height: ${props => props.height || 'auto'};
  width: 150px;
  overflow: auto;
  background-color: #1d1f27;
  border-radius: 3px;
`;

const MenuBar = styled(Flex)`
  padding: 5px;
  margin-bottom: 5px;
  background-color: rgb(5, 161, 204);
`;

const FileNameContainer = styled(Flex)`
  padding: 2px;
  ${props => (props.active ? `background-color: rgba(255, 228, 194, 0.2);` : '')}
`;

const StyledText = styled(Text)`
  cursor: pointer;
  margin: 0 0 0 5px;
  color: rgb(197, 200, 198);
`;

function FileName({ name, index, active, onFileSwitch, onFileRename }) {
  const inputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);

  const handleOutsideClick = useCallback(event => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setEditMode(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleInputKeyDown = useCallback(
    event => {
      if (event.key === 'Enter') {
        if (inputRef.current.value === name) {
          setEditMode(false);
        } else onFileRename(index, inputRef.current.value);
      }
    },
    [index, name, onFileRename]
  );
  const handleClick = useCallback(() => {
    if (active) {
      setEditMode(true);
    } else {
      onFileSwitch(index);
    }
  }, [active, index, onFileSwitch]);

  return editMode ? (
    <Input autoFocus defaultValue={name} ref={inputRef} onKeyDown={handleInputKeyDown} />
  ) : (
    <StyledText onClick={handleClick}>{`./${name}`}</StyledText>
  );
}

export default function FilePanel(props) {
  const {
    files,
    currentFileIndex,
    onFileSwitch,
    onFileRename,
    onFileAdd,
    onFileRemove,
    ...rest
  } = props;
  return (
    <Panel {...rest}>
      <MenuBar justifyContent="flex-end">
        <Icon icon={faPlusSquare} color="white" onClick={onFileAdd} />
      </MenuBar>
      <div>
        {files.map((name, index) => (
          <FileNameContainer
            key={name}
            active={index === currentFileIndex}
            justifyContent="space-between"
            alignItems="center"
          >
            <FileName
              name={name}
              index={index}
              active={index === currentFileIndex}
              onFileSwitch={onFileSwitch}
              onFileRename={onFileRename}
            />
            {index ? <Icon icon={faCut} color="white" onClick={() => onFileRemove(index)} /> : null}
          </FileNameContainer>
        ))}
      </div>
    </Panel>
  );
}
