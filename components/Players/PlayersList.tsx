import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { ListWrapper } from '../styled';
import { ListItem } from './ListItem';

export const PlayersList: React.FC<any> = ({
  items,
  deleteSearchItem,
  handleEditPlayer,
}) => {
  const keyExtractor = useCallback((item) => item.id, []);

  const renderItem = useCallback(
    ({ item }) => (
      <ListItem
        setEditablePlayer={handleEditPlayer}
        onDelete={deleteSearchItem}
        item={item}
      />
    ),
    []
  );

  return (
    <ListWrapper>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </ListWrapper>
  );
};
