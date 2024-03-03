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
