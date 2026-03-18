import styled from "styled-components";

export const SearchContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 1023px;
  max-height: 48px;
  height: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 0 12px 52px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  font-size: 14px;
  background: #f9f9f9;

  &::placeholder {
    color: #999;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 20px;
  top: 12px;
  color: #999;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    color: #666;
  }
`;
