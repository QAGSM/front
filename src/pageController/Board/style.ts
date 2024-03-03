import { theme } from "@/style";
import styled from "@emotion/styled";

export const BoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

export const BoardContainer = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["90"]};
  font-size: 2.575rem;
  font-weight: 600;
  line-height: 3.25rem;
  padding-left: 0.25rem;
`;

export const Input = styled.input`
  padding: 1rem;
  margin-top: 50px;
  border-radius: 0.75rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey["30"]};
  background: ${({ theme }) => theme.color.grey["40"]};
  color: ${({ theme }) => theme.color.grey["100"]};
  ::placeholder {
    color: ${({ theme }) => theme.color.grey["50"]};
  }
  outline: none;
  font-size: 17.2px;
  font-weight: 600;
  line-height: 1.5rem;
  width: 300px;
`;

export const BoardTextArea = styled.textarea`
  margin-top: 20px;
  border-radius: 0.75rem;
  resize: none;
  padding: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.color.grey["40"]};
  border: 0.0625rem solid ${({ theme }) => theme.color.grey["30"]};

  color: ${({ theme }) => theme.color.grey["100"]};
  ::placeholder {
    color: ${({ theme }) => theme.color.grey["50"]};
  }
  outline: none;
  font-size: 16.2px;
  font-weight: 600;
  line-height: 1.5rem;
  height: 500px;
`;

export const SubmitButton = styled.button`
  margin-top: 40px;
  max-width: 560px;
  width: 100%;
  height: 50px;
  border-radius: 1rem;
  background: ${({ theme }) => theme.color.primary["30"]};
  border: 0;
  cursor: pointer;

  color: ${({ theme }) => theme.color.grey["100"]};
  font-size: 1.2rem;
  font-weight: 600;

  bottom: 1.5rem;
`;
