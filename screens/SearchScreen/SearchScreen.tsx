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
import { EditModal } from '../../modals/EditModal';
import { ContentModal } from '../../modals/ContentModal';
import { connect } from 'react-redux';
import {
  getSearchResults,
  addSearchItemAction,
  deleteSearchItemAction,
  editSearchItemAction,
} from '../../redux/search/actions';
import { openModal, closeModal } from '../../redux/navigation/actions';
import { SearchScreenProps } from './types';
import uuid from 'react-native-uuid';
import { ActivityIndicator } from 'react-native';
import { Item } from '../../types';
import type { RootState } from '../../redux/store';

export const SearchScreenContainer: React.FC<SearchScreenProps> = ({
  items,
  isModalOpened,
  getSearchResults,
  addSearchItemAction,
  deleteSearchItemAction,
  editSearchItemAction,
  openModal,
  closeModal,
  isLoading,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editableItem, setEditableItem] = useState({ title: '' });

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

  const handleEditItem = (item: Item) => {
    setEditableItem(item);
    setIsEditModalVisible(true);
  };
  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <Wrapper>
        <ButtonWrapper>
          <ButtonContainer
            color='red'
            height={60}
            width={200}
            onPress={openModal}
          >
            <ButtonTitle color='#fff'>Open Content Modal</ButtonTitle>
          </ButtonContainer>
        </ButtonWrapper>

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
        <ResultsList
          addSearchItem={addSearchItemAction}
          deleteSearchItem={deleteSearchItemAction}
          setEditSearchItem={handleEditItem}
          items={items}
        />

        <EditModal
          submitEditTitle={handleSubmitEdit}
          editableItem={editableItem}
          isVisible={isEditModalVisible}
          setIsVisible={setIsEditModalVisible}
        />
        <ContentModal onClose={closeModal} isVisible={isModalOpened} />
      </Wrapper>
      <ButtonWrapper>
        <ButtonContainer
          color='blue'
          height={60}
          width={200}
          onPress={handleAddItem}
        >
          <ButtonTitle color='#fff'>Add Item</ButtonTitle>
        </ButtonContainer>
      </ButtonWrapper>
    </>
  );
};

export const SearchScreen = connect(
  ({ searchReducer, navigationReducer }: RootState) => ({
    isLoading: searchReducer.isLoading,
    items: searchReducer.items,
    isModalOpened: navigationReducer.isModalOpened,
  }),
  (dispatch) => ({
    getSearchResults: (query: string) => dispatch(getSearchResults(query)),
    addSearchItemAction: (item: Item) => dispatch(addSearchItemAction(item)),
    deleteSearchItemAction: (id: string) =>
      dispatch(deleteSearchItemAction(id)),
    editSearchItemAction: (newItem: Item) =>
      dispatch(editSearchItemAction(newItem)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  })
)(SearchScreenContainer);
