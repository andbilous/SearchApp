import React, { useEffect, useState } from 'react';
import {
  ButtonTitle,
  ButtonContainer,
  ButtonWrapper,
  SearchWrapper,
  SearchButton,
  Wrapper,
  SearchInput,
} from '../../styled';
import { ResultsList } from '../../components/Results/ResultsList';
import { PlayersList } from '../../components/Players/PlayersList';
import { EditModal } from '../../modals/EditModal';
import { EditPlayerModal } from '../../modals/EditPlayerModal';
import { ContentModal } from '../../modals/ContentModal';
import { Sort } from '../../components/Sort';
import { useSort, Order, Field } from '../../hooks/useSort';
import { useSearch } from '../../hooks/useSearch';
import { connect } from 'react-redux';
import {
  getSearchResults,
  addSearchItemAction,
  deleteSearchItemAction,
  editSearchItemAction,
  addPlayer,
  editPlayer,
} from '../../redux/search/actions';
import { openModal, closeModal } from '../../redux/navigation/actions';
import { SearchScreenProps } from './types';
import uuid from 'react-native-uuid';
import { ActivityIndicator } from 'react-native';
import { Item } from '../../types';
import type { RootState } from '../../redux/store';

export const PlayersScreenContainer: React.FC<SearchScreenProps> = ({
  isModalOpened,
  getSearchResults,
  addSearchItemAction,
  deleteSearchItemAction,
  editSearchItemAction,
  openModal,
  closeModal,
  isLoading,
  players,
  editPlayer,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editableItem, setEditableItem] = useState({ title: '' });
  const [editablePlayer, setEditablePlayer] = useState(players[0]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(players.length);
  const [order, setOrder] = useState(Order.ASC);
  const [field, setField] = useState(Field.FIRSTNAME);
  const { sort } = useSort();
  const { search } = useSearch();
  const defaultSearchTerm = 'Jack';

  useEffect(() => {
    getSearchResults(defaultSearchTerm);
  }, []);

  const handleSearch = () => {
    getSearchResults(inputValue);
  };

  const handleSubmitEdit = (title: string) => {
    editSearchItemAction({ ...editableItem, title });
  };

  const handleAddItem = () => {
    addSearchItemAction({
      title: 'new Item',
      cacheId: uuid.v4(),
    });
  };

  const handleSubmitEditPlayer = (player: any) => {
    editPlayer(player);
  };

  const handleEditPlayer = (item: any) => {
    setEditableItem(item);
    setIsEditModalVisible(true);
  };
  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <Wrapper>
        <Sort
          order={order}
          setOrder={setOrder}
          field={field}
          setField={setField}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          playersLength={players.length}
        />
        <SearchWrapper>
          <SearchInput
            placeholder='Enter query'
            value={inputValue}
            onChangeText={setInputValue}
          />
          <SearchButton onPress={handleSearch}>
            <ButtonTitle>Search</ButtonTitle>
          </SearchButton>
        </SearchWrapper>

        <PlayersList
          handleEditPlayer={handleEditPlayer}
          items={search(sort(players, order, field, from, to), inputValue)}
        />
        <EditPlayerModal
          isVisible={isEditModalVisible}
          setIsVisible={setIsEditModalVisible}
          editablePlayer={editablePlayer}
          submitEditPlayer={handleSubmitEditPlayer}
        />

        {/* 
        <EditModal
          submitEditTitle={handleSubmitEdit}
          editableItem={editableItem}
          isVisible={isEditModalVisible}
          setIsVisible={setIsEditModalVisible}
        /> */}
        {/* <ContentModal onClose={closeModal} isVisible={isModalOpened} /> */}
      </Wrapper>
      {/* <ButtonWrapper>
        <ButtonContainer
          color='blue'
          height={60}
          width={200}
          onPress={handleAddItem}
        >
          <ButtonTitle color='#fff'>Add Item</ButtonTitle>
        </ButtonContainer>
      </ButtonWrapper> */}
    </>
  );
};

export const PlayersScreen = connect(
  ({ searchReducer }: RootState) => ({
    players: searchReducer.players,
  }),
  (dispatch) => ({
    getSearchResults: (query: string) => dispatch(getSearchResults(query)),
    addPlayer: (item: Item) => dispatch(addPlayer(item)),
    deleteSearchItemAction: (id: string) =>
      dispatch(deleteSearchItemAction(id)),
    editSearchItemAction: (newItem: Item) =>
      dispatch(editSearchItemAction(newItem)),
    editPlayer: (item: any) => dispatch(editPlayer(item)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  })
)(PlayersScreenContainer);
