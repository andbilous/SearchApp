import React from 'react';
import { Text } from 'react-native';
import {
  ListItemWrapper,
  AddButton,
  DeleteButton,
  EditButton,
} from '../styled';
import {
  ButtonTitle,
  ButtonWrapper,
  ItemWrapper,
  ButtonContainer,
} from '../../styled';

export const ListItem = ({ item, setEditSearchItem, onDelete }) => {
  const handleDelete = () => {
    onDelete(item);
  };

  const handleEdit = () => setEditSearchItem(item);

  return (
    <ListItemWrapper>
      <ItemWrapper>
        <Text numberOfLines={1}>{item.title}</Text>
      </ItemWrapper>
      <ButtonContainer width={100} backgroundColor='green' onPress={handleEdit}>
        <ButtonTitle>Edit</ButtonTitle>
      </ButtonContainer>
      <ButtonContainer width={100} backgroundColor='red' onPress={handleDelete}>
        <ButtonTitle>DELETE</ButtonTitle>
      </ButtonContainer>
    </ListItemWrapper>
  );
};
