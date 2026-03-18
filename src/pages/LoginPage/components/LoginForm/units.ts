import styled from "styled-components";

export const Container = styled.div`
  max-width: 527px;
  max-height: 716px;

  padding: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  border-radius: 40px;
  border: 6px solid #fff;

  background-color: #ffffff;
  box-shadow: 0px 24px 32px 0px rgba(0, 0, 0, 0.04);
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 110%;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #e0e0e0;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;

export const LogoWrapper = styled.div`
  padding: 9px 8.5px;
  border: 1px solid #ededed;

  border-radius: 100px;
  background: #fff;
  box-shadow:
    inset 0px 0px 0px 2px #ffffff,
    0px 12px 8px 0px rgba(0, 0, 0, 0.03);

  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

export const FieldLabel = styled.label`
  font-size: 18px;
  font-weight: 500;

  color: #232323;

  margin-bottom: 6px;
  display: block;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  border-radius: 12px;
`;

export const LeftIcon = styled.span`
  position: absolute;
  left: 14px;
  color: #999;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const RightIcon = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;

  &:hover {
    color: #666;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 48px 14px 48px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background: #fff;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #2f47e8;
    box-shadow: 0 0 0 3px rgba(47, 71, 232, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid #d0d0d0;
  border-radius: 4px;

  accent-color: #2f47e8;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 16px 24px;

  background: #2f47e8;
  color: #fff;

  border: 1px solid #367aff;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;

  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #1e34c9;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: #999;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #999;
  font-size: 14px;
  margin: 8px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e0e0e0;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4444;
  font-size: 13px;
  margin-top: 6px;
  margin-left: 4px;
`;
