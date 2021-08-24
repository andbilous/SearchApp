import { Item } from '../types';

export interface ContentModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface EditModalProps {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  editableItem: Item;
  submitEditTitle: (arg: string) => void;
}
