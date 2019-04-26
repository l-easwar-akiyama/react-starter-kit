/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import parser from './parser';

const Preview = styled.div`
  height: ${props => props.height || 'auto'};
  overflow: auto;
  background-color: white;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 2px solid teal;
`;
Preview.defaultProps = { height: '300px' };

export default function Renderer({ files, counter }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (files.length) {
      setLoading(true);
      const transpiledFiles = parser(files);
      import(/* webpackIgnore: true */ transpiledFiles[transpiledFiles.length - 1].url)
        .catch(function(error) {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [counter]);
  return (
    <Preview>
      {loading ? <span>Loading</span> : null}
      <div id="sandbox" style={{ display: `${loading ? 'none' : 'block'}` }} />
    </Preview>
  );
}

Renderer.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired, code: PropTypes.string.isRequired })
  ).isRequired,
  counter: PropTypes.number,
};
Renderer.defaultProps = { counter: 0 };
