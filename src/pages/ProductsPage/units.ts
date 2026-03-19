import styled from "styled-components";

import { tokens } from "styles/tokens";

export const PageWrapper = styled.div`
  padding-top: ${tokens.spacing[11]};
  background: ${tokens.color.gray[100]};
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[15]};
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[8]};
  flex-wrap: wrap;

  padding: ${tokens.spacing[11]} ${tokens.spacing[15]};

  background-color: ${tokens.color.white};

  @media (max-width: ${tokens.breakpoint.md}) {
    flex-direction: column;
    align-items: stretch;
    padding: ${tokens.spacing[8]} ${tokens.spacing[6]};
  }
`;

export const PageHeaderLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PageHeaderSearchSlot = styled.div`
  flex: 2;
  min-width: 0;
  display: flex;
  justify-content: center;

  @media (max-width: ${tokens.breakpoint.md}) {
    flex: none;
    justify-content: stretch;
  }
`;

export const PageHeaderRight = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${tokens.spacing[3]};

  @media (max-width: ${tokens.breakpoint.md}) {
    justify-content: center;
  }
`;

export const HeaderIconButton = styled.button`
  padding: ${tokens.spacing[5]};
  background: transparent;
  border: none;
  color: ${tokens.color.gray[600]};

  border-radius: ${tokens.radius.sm};
  transition:
    border-color ${tokens.transition.fast},
    background-color ${tokens.transition.fast};
  position: relative;

  &:hover {
    color: ${tokens.color.gray[800]};
    background: ${tokens.color.gray[100]};
  }
`;

export const HeaderIconBadge = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: ${tokens.color.badge};
  color: ${tokens.color.white};
  font-size: ${tokens.typography.fontSize.xxs};
  font-weight: ${tokens.typography.fontWeight.bold};
  border-radius: ${tokens.radius.full};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: ${tokens.typography.fontSize.x};
  font-weight: ${tokens.typography.fontWeight.semibold};
  flex-shrink: 0;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[20]};

  padding: ${tokens.spacing[15]};
  background-color: ${tokens.color.white};

  @media (max-width: ${tokens.breakpoint.md}) {
    padding: ${tokens.spacing[8]} ${tokens.spacing[6]};
    gap: ${tokens.spacing[12]};
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${tokens.spacing[6]};

  @media (max-width: ${tokens.breakpoint.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SectionTitle = styled.h4`
  font-size: ${tokens.typography.fontSize.lgg};
  font-weight: ${tokens.typography.fontWeight.semibold};
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: ${tokens.spacing[3]};
  align-items: center;
`;

export const IconButton = styled.button<{ $active?: boolean }>`
  padding: ${tokens.spacing[5]};
  background: ${({ $active }) =>
    $active ? tokens.color.primaryFocus : tokens.color.white};
  border: 1px solid
    ${({ $active }) =>
      $active ? tokens.color.primary : tokens.color.gray[300]};
  border-radius: ${tokens.spacing[3]};

  transition:
    border-color ${tokens.transition.fast},
    background-color ${tokens.transition.fast};

  &:hover {
    background: ${({ $active }) =>
      $active ? tokens.color.primaryFocus : tokens.color.gray[100]};
  }
`;

export const AddButton = styled.button`
  padding: ${tokens.spacing[5]} ${tokens.spacing[11]};
  background: ${tokens.color.primary};
  color: ${tokens.color.white};
  border: none;
  border-radius: ${tokens.spacing[3]};
  font-size: ${tokens.typography.fontSize.base};
  font-weight: ${tokens.typography.fontWeight.semibold};

  display: flex;
  align-items: center;
  gap: ${tokens.spacing[3]};
  transition: background-color ${tokens.transition.fast};

  &:hover {
    background: ${tokens.color.primaryHover};
  }
`;
