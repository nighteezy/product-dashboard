import styled from "styled-components";

import { tokens } from "styles/tokens";

export const Container = styled.div`
  max-width: 527px;
  max-height: 716px;

  padding: ${tokens.spacing[24]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[16]};

  border-radius: ${tokens.radius.lg};
  border: 6px solid ${tokens.color.white};

  background:
    linear-gradient(
      to bottom,
      ${tokens.color.gradient.start} 0%,
      ${tokens.color.gradient.end} 85%
    ),
    ${tokens.color.white};
  box-shadow: ${tokens.shadow.card.top}, ${tokens.shadow.card.bottom};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[6]};

  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  line-height: ${tokens.typography.lineHeight.tight};
`;

export const Subtitle = styled.p`
  color: ${tokens.color.gray[300]};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.normal};
  line-height: ${tokens.typography.lineHeight.normal};
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.17) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const LogoWrapper = styled.div`
  padding: ${tokens.spacing[4]} ${tokens.spacing.logoPaddingX};

  border-radius: ${tokens.radius.full};
  background:
    linear-gradient(
      to bottom,
      ${tokens.color.gradient.startLogo} 0%,
      ${tokens.color.gradient.end} 45%
    ),
    ${tokens.color.white};
  box-shadow: ${tokens.shadow.logo.outline}, ${tokens.shadow.logo.drop};

  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[8]};
  width: 100%;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[5]};
  cursor: pointer;
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.color.gray[600]};
`;

export const LoginButton = styled.button<{ $isLoading?: boolean }>`
  padding: ${tokens.spacing[8]} ${tokens.spacing[12]};

  background: ${tokens.color.primary};
  color: ${tokens.color.white};

  border: 1px solid ${tokens.color.primaryBorder};
  border-radius: ${tokens.radius.md};

  font-size: ${tokens.typography.fontSize.md};
  font-weight: ${tokens.typography.fontWeight.semibold};

  transition: all ${tokens.transition.fast};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing[3]};

  &:hover:not(:disabled) {
    background: ${tokens.color.primaryHover};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: ${({ $isLoading }) => ($isLoading ? "wait" : "not-allowed")};
    opacity: ${({ $isLoading }) => ($isLoading ? "0.85" : "0.7")};
    ${({ $isLoading }) =>
      !$isLoading && `background: ${tokens.color.disabled};`}
  }
`;

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid ${tokens.color.spinnerBorderLight};
  border-top-color: ${tokens.color.white};
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ApiErrorWrapper = styled.div`
  animation: apiErrorIn ${tokens.transition.normal} ease-out forwards;

  @keyframes apiErrorIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ApiErrorMessage = styled.p`
  color: ${tokens.color.error};
  font-size: ${tokens.typography.fontSize.sm};
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[8]};
  color: ${tokens.color.gray[500]};
  font-size: ${tokens.typography.fontSize.base};
  margin: ${tokens.spacing[3]} 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${tokens.color.gray[300]};
  }
`;

export const SignupPrompt = styled.p`
  font-size: ${tokens.typography.fontSize.lg};
  color: ${tokens.color.gray[700]};
  text-align: center;
`;

export const SignupLink = styled.span`
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.bold};
  color: ${tokens.color.link};
  border-bottom: 1px solid currentColor;
  padding-bottom: ${tokens.spacing[0]};
  cursor: pointer;

  &:hover {
    color: ${tokens.color.linkHover};
  }
`;
