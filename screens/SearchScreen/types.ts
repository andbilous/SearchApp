export interface SearchScreenProps {
  items: [];
  isModalOpened: boolean;
  getSearchResults: (arg: string) => void;
  addSearchItemAction: (item: any) => void;
  deleteSearchItemAction: () => void;
  editSearchItemAction: (item: any) => void;
  openModal: () => void;
  closeModal: () => void;
}
