import styled from 'styled-components';
import Flex from './Flex';

const Main = styled(Flex)`
  padding: 80px 40px 30px 40px;
`;
Main.defaultProps = { flexDirection: 'column' };

export { Flex, Main };
