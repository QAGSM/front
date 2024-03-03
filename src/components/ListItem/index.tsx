import * as S from "./style";

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <S.ListItem>{children}</S.ListItem>
);

export default ListItem;
