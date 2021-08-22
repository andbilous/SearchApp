import React, { useEffect } from 'react';
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
import { useState } from 'react';
import uuid from 'react-native-uuid';

export const SearchScreenContainer = ({
  items,
  isModalOpened,
  getSearchResults,
  addSearchItemAction,
  deleteSearchItemAction,
  editSearchItemAction,
  openModal,
  closeModal,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editableItem, setEditableItem] = useState({});

  useEffect(() => {
    getSearchResults('mama');
  }, []);

  const handleSearch = () => {
    getSearchResults(inputValue);
  };

  const handleSubmitEdit = (title) => {
    console.log('title222', title);
    editSearchItemAction({ ...editableItem, title });
  };

  const handleAddItem = () => {
    addSearchItemAction({
      title: 'new Item',
      cacheId: uuid.v4(),
    });
  };

  const handleEditItem = (item) => {
    setEditableItem(item);
    setIsEditModalVisible(true);
  };

  return (
    <>
      <Wrapper>
        <ButtonWrapper>
          <ButtonContainer
            backgroundColor='red'
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
          backgroundColor='blue'
          height={60}
          width={200}
          onPress={openModal}
          onPress={handleAddItem}
        >
          <ButtonTitle color='#fff'>Add Item</ButtonTitle>
        </ButtonContainer>
      </ButtonWrapper>
    </>
  );
};

export const SearchScreen = connect(
  ({ searchReducer, navigationReducer }) => ({
    isLoading: searchReducer.isLoading,
    items: searchReducer.items,
    isModalOpened: navigationReducer.isModalOpened,
  }),
  (dispatch) => ({
    getSearchResults: (query: string) => dispatch(getSearchResults(query)),
    addSearchItemAction: (item: any) => dispatch(addSearchItemAction(item)),
    deleteSearchItemAction: (id: string) =>
      dispatch(deleteSearchItemAction(id)),
    editSearchItemAction: (newItem) => dispatch(editSearchItemAction(newItem)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  })
)(SearchScreenContainer);
