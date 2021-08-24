import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { ListWrapper } from '../styled';
import { ListItem } from './ListItem';

import { ResultsListProps } from './types';

export const ResultsList: React.FC<ResultsListProps> = ({
  items,
  deleteSearchItem,
  setEditSearchItem,
}) => {
  const keyExtractor = useCallback((item) => item.cacheId, []);

  const renderItem = useCallback(
    ({ item }) => (
      <ListItem
        setEditSearchItem={setEditSearchItem}
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
