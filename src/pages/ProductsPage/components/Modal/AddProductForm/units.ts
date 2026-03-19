import styled from "styled-components";

import { tokens } from "styles/tokens";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[8]};
`;

export const SubmitButton = styled.button`
  margin-top: ${tokens.spacing[5]};
  padding: ${tokens.spacing[5]} ${tokens.spacing[12]};
  background: ${tokens.color.primary};
  color: ${tokens.color.white};
  border: none;
  border-radius: ${tokens.radius.sm};
  font-size: ${tokens.typography.fontSize.base};
  font-weight: ${tokens.typography.fontWeight.semibold};
  cursor: pointer;
  transition: background ${tokens.transition.fast};

  &:hover {
    background: ${tokens.color.primaryHover};
  }
`;
