import styled from "styled-components";

import { tokens } from "styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[6]};
  padding: ${tokens.spacing[12]};
  text-align: center;
`;

export const Icon = styled.div`
  color: ${tokens.color.gray[400]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.color.gray[600]};
  max-width: 280px;
`;
