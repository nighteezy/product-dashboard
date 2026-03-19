import styled from "styled-components";

import { tokens } from "styles/tokens";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${tokens.color.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background: ${tokens.color.white};
  border-radius: ${tokens.radius.md};
  max-width: 480px;
  width: 100%;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${tokens.spacing[12]} ${tokens.spacing[12]} 0;
`;

export const Title = styled.h2`
  font-size: ${tokens.typography.fontSize.x};
  font-weight: ${tokens.typography.fontWeight.semibold};
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${tokens.color.gray[600]};

  transition: all ${tokens.transition.fast};

  &:hover {
    background: ${tokens.color.gray[100]};
    color: ${tokens.color.gray[800]};
  }
`;

export const Body = styled.div`
  padding: ${tokens.spacing[12]};
`;
