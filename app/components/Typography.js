import styled from 'styled-components';

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.87);
  font-size: 6rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.01562em;
`;

const Header = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-size: 3.75rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.00833em;
`;

const SubHeader = styled.h3`
  color: rgba(0, 0, 0, 0.87);
  font-size: 3rem;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: 0;
`;

const TertiaryHeader = styled.h4`
  color: rgba(0, 0, 0, 0.87);
  font-size: 2.125rem;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.17;
  letter-spacing: 0.00735em;
`;

const Paragraph = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

const Text = styled.span`
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;
`;

const Caption = styled(Text)`
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;

const Link = styled.a`
  color: #2196f3;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export { Title, Header, SubHeader, TertiaryHeader, Paragraph, Text, Caption, Link };
