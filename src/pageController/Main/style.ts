import styled from "@emotion/styled";
import { theme } from "@/style";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.875rem;
  border-radius: 0.625rem;
  color: white;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["90"]};
  font-size: 2.575rem;
  font-weight: 600;
  line-height: 3.25rem;
  padding-left: 0.25rem;
`;

export const BoardButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const BoardButton = styled.button`
  margin-top: 2.5rem;
  padding: 0.9rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.color.grey["40"]};
  color: ${({ theme }) => theme.color.grey["100"]};
  border: 0.0625rem solid ${({ theme }) => theme.color.grey["30"]};

  outline: none;
  font-size: 1.075rem;
  font-weight: 600;
  line-height: 1.5rem;
  width: 10.75rem;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  margin-top: 1.875rem;
  width: 100%;
  max-height: 40.625rem;
  overflow-y: auto;
  background-color: white;
`;
