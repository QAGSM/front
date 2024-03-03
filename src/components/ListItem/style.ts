import styled from "@emotion/styled";
import { theme } from "@/style";

export const ListItem = styled.div`
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  text-indent: 20px;
  background: ${({ theme }) => theme.color.grey["40"]};
  color: ${({ theme }) => theme.color.grey["100"]};
  border: 0.0625rem solid ${({ theme }) => theme.color.grey["30"]};
  height: 3.75rem;
  cursor: pointer;
  margin-bottom: 0.375rem;
`;
