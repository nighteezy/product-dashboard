import styled from "styled-components";

import { tokens } from "styles/tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${tokens.spacing[24]};
  text-align: center;
  background: ${tokens.color.gray[100]};
`;

export const Title = styled.h2`
  margin: 0 0 ${tokens.spacing[8]};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.color.gray[800]};
`;

export const Message = styled.p`
  margin: 0 0 ${tokens.spacing[12]};
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.color.gray[600]};
  max-width: 400px;
`;

export const RetryButton = styled.button`
  padding: ${tokens.spacing[5]} ${tokens.spacing[12]};
  background: ${tokens.color.primary};
  color: ${tokens.color.white};
  border: none;
  border-radius: ${tokens.radius.md};
  font-size: ${tokens.typography.fontSize.base};
  font-weight: ${tokens.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${tokens.transition.fast};

  &:hover {
    background: ${tokens.color.primaryHover};
  }
`;
