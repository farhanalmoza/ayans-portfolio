import React from 'react';
import styled from 'styled-components';

const Pstyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 1.7rem;
  text-shadow: 1px 1px var(--deep-dark);
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <Pstyle className="para">
      <p>{children}</p>
    </Pstyle>
  );
}
