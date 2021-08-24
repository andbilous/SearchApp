export interface ResultsListProps {
  items: [];
  addSearchItem: (item: any) => void;
  deleteSearchItem: (item: any) => void;
  setEditSearchItem: (item: any) => void;
}

export interface ListItemProps {
  item: any;
  setEditSearchItem: (item: string) => void;
  onDelete: (item: any) => void;
}
