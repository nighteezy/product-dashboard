import styled from "styled-components";

import { tokens } from "styles/tokens";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${tokens.color.gray[100]};
`;
