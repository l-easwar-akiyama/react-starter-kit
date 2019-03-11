import styled, { css } from 'styled-components';

const Base = css`
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.35em;
`;

const Text = styled.span`
  ${Base}
  font-weight: 400;
  line-height: 1.5;
  font-size: ${({ secondary }) => (secondary ? 0.875 : 1)}rem;
  letter-spacing: ${({ secondary }) => (secondary ? 0.01071 : 0.00938)}rem;
`;

const Caption = styled(Text)`
  ${Base}
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;

const Link = styled.a`
  color: #2196f3;
`;

export { Text, Caption, Link };
