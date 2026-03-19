import styled from "styled-components";

import { tokens } from "styles/tokens";

export const Wrapper = styled.div`
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + ${tokens.spacing[2]});
  right: 0;
  min-width: 220px;
  background: ${tokens.color.white};
  border: 1px solid ${tokens.color.gray[300]};
  border-radius: ${tokens.radius.md};
  box-shadow: ${tokens.shadow.card.bottom};
  padding: ${tokens.spacing[6]};
  z-index: 100;
`;

export const Title = styled.div`
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.color.gray[600]};
  margin-bottom: ${tokens.spacing[6]};
`;

export const Section = styled.div`
  margin-bottom: ${tokens.spacing[6]};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.div`
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.color.gray[500]};
  margin-bottom: ${tokens.spacing[2]};
`;

export const Option = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${tokens.spacing[3]} ${tokens.spacing[5]};
  background: ${({ $active }) =>
    $active ? tokens.color.primaryFocus : "transparent"};
  border: none;
  border-radius: ${tokens.radius.sm};
  cursor: pointer;
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.color.gray[800]};
  text-align: left;
  transition: all ${tokens.transition.fast};
  margin-bottom: ${tokens.spacing[1]};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${tokens.color.gray[100]};
  }
`;
