import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pick, kebabCase } from 'lodash-es';
import flexTypes from './types';

const Flex = styled.div.attrs(props => ({
  style: {
    ...pick(props, flexTypes.dynamicProps),
    ...props.style,
  },
}))`
  display: flex;
  ${props => {
    return Object.entries(pick(props, flexTypes.staticProps)).map(
      ([key, value]) => `${kebabCase(key)}: ${value};`
    );
  }}
`;

Flex.propTypes = {
  flexDirection: PropTypes.oneOf(flexTypes.flexDirection),
  flexWrap: PropTypes.oneOf([...flexTypes.flexWrap, ...flexTypes.globalPropValues]),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  justifyContent: PropTypes.oneOf(flexTypes.justifyContent),
  justifyItems: PropTypes.oneOf(flexTypes.justifyItems),
  justifySelf: PropTypes.oneOf(flexTypes.justifySelf),
  alignContent: PropTypes.oneOf(flexTypes.alignContent),
  alignItems: PropTypes.oneOf(flexTypes.alignItems),
  alignSelf: PropTypes.oneOf(flexTypes.alignSelf),
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Flex.defaultProps = { style: {} };

export default Flex;
