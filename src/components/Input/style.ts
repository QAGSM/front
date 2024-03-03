import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputTitle = styled.span`
  color: ${({ theme }) => theme.color.grey["90"]};

  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;

  padding-left: 0.25rem;
`;

export const Input = styled.input`
  padding: 1rem;

  border-radius: 0.75rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey["30"]};
  background: ${({ theme }) => theme.color.grey["20"]};
  color: ${({ theme }) => theme.color.grey["100"]};

  ::placeholder {
    color: ${({ theme }) => theme.color.grey["50"]};
  }

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
`;
