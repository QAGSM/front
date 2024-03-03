import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;
  padding-top: 1.875rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["90"]};

  font-size: 2.575rem;
  font-weight: 600;
  line-height: 3.25rem;

  padding-left: 0.25rem;
`;

export const Button = styled.button`
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;

  max-width: 560px;
  width: calc(100vw - 40px);
  border-radius: 1rem;
  background: ${({ theme }) => theme.color.primary["30"]};
  border: 0;
  cursor: pointer;

  color: ${({ theme }) => theme.color.grey["100"]};
  font-size: 1.2rem;
  font-weight: 600;

  position: absolute;
  bottom: 1.5rem;
`;
