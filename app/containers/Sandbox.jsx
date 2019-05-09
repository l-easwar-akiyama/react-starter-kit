import React, { useReducer, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Editor, Renderer, FilePanel, Button } from 'components';

const EditorContainer = styled(Flex)`
  margin-bottom: 20px;
`;

const StyledFilePanel = styled(FilePanel)`
  margin-right: 20px;
`;

const StyledEditor = styled(Editor)`
  flex: 1;
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-bottom: 60px;
`;

const sampleSnippet = `import React from "react";
import ReactDOM from "react-dom";
import {greeting} from "./constant.js";

function App() {
  return (
    <div>
      <h2>{greeting}</h2>
      <h3>Start editing ..</h3>
      <h4>..and see click run to see the magic</h4>
    </div>
  );
}

const rootElement = document.getElementById("sandbox");
ReactDOM.render(<App />, rootElement);
`;

const secondSampleSnippet = `const greeting = 'Welcome !';
export {greeting};
`;

const newFileSnippet = `/* Insert code here */`;

const initialState = [
  { name: 'index.js', code: sampleSnippet },
  { name: 'constant.js', code: secondSampleSnippet },
];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { name: action.payload.name, code: newFileSnippet }];
    case 'remove':
      return state.filter((_, index) => index !== action.payload.index);
    case 'update':
      return state.map((file, index) => {
        if (index === action.payload.index) {
          return { ...file, code: action.payload.code };
        }
        return file;
      });
    case 'rename':
      return state.map((file, index) => {
        if (index === action.payload.index) {
          return { ...file, name: action.payload.name };
        }
        return file;
      });
    default:
      throw new Error('Unknown action');
  }
}

export default function Sandbox() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const handleCodeChange = useCallback(
    code => {
      dispatch({ type: 'update', payload: { index: currentFileIndex, code } });
    },
    [currentFileIndex]
  );
  const handleFileAdd = useCallback(() => {
    dispatch({ type: 'add', payload: { name: `newFile_${state.length}.js` } });
  }, [state]);
  const handleFileRemove = useCallback(
    index => {
      if (index === currentFileIndex) setCurrentFileIndex(0);

      dispatch({ type: 'remove', payload: { index } });
    },
    [currentFileIndex]
  );
  const handleFileRename = useCallback((index, name) => {
    dispatch({ type: 'rename', payload: { index, name } });
  }, []);
  return (
    <Flex flexDirection="column">
      <EditorContainer>
        <StyledFilePanel
          files={state.map(({ name }) => name)}
          currentFileIndex={currentFileIndex}
          onFileSwitch={setCurrentFileIndex}
          onFileRemove={handleFileRemove}
          onFileAdd={handleFileAdd}
          onFileRename={handleFileRename}
        />
        <StyledEditor code={state[currentFileIndex].code} onChangeCode={handleCodeChange} />
      </EditorContainer>
      <StyledButton onClick={() => setCounter(counter + 1)}>RUN</StyledButton>
      <Renderer counter={counter} files={state} />
    </Flex>
  );
}
