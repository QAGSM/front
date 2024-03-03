import * as S from "./style";

interface ListItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ children, onClick }) => (
  <S.ListItem onClick={onClick}>{children}</S.ListItem>
);

export default ListItem;
