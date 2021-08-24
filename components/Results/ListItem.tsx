import React from 'react';
import { Text } from 'react-native';
import { ListItemWrapper } from '../styled';
import { ButtonTitle, ItemWrapper, ButtonContainer } from '../../styled';
import { ListItemProps } from './types';

export const ListItem: React.FC<ListItemProps> = ({
  item,
  setEditSearchItem,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete(item);
  };

  const handleEdit = () => setEditSearchItem(item);

  return (
    <ListItemWrapper>
      <ItemWrapper>
        <Text numberOfLines={1}>{item.title}</Text>
      </ItemWrapper>
      <ButtonContainer width={100} color='green' onPress={handleEdit}>
        <ButtonTitle>Edit</ButtonTitle>
      </ButtonContainer>
      <ButtonContainer width={100} color='red' onPress={handleDelete}>
        <ButtonTitle>DELETE</ButtonTitle>
      </ButtonContainer>
    </ListItemWrapper>
  );
};
