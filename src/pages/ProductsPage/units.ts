import styled from "styled-components";

export const PageWrapper = styled.div`
  padding-top: 20px;
  background: #f9f9f9;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 26px 30px;

  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;

  margin: 0;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 30px;
  background-color: #fff;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const IconButton = styled.button`
  padding: 8px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background: #2f47e8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: #1e34c9;
  }
`;
