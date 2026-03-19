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
  padding: ${tokens.spacing[12]};
`;

export const Content = styled.div`
  font-family: "Inter", sans-serif;
  background: ${tokens.color.white};
  border-radius: ${tokens.radius.md};
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${tokens.shadow.card.bottom};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${tokens.spacing[12]} ${tokens.spacing[12]} 0;
`;

export const Title = styled.h3`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.color.gray[800]};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  padding: ${tokens.spacing[3]};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${tokens.color.gray[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${tokens.radius.sm};
  transition: all ${tokens.transition.fast};

  &:hover {
    background: ${tokens.color.gray[100]};
    color: ${tokens.color.gray[800]};
  }
`;

export const Body = styled.div`
  padding: ${tokens.spacing[12]};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
