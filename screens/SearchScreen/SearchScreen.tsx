import {Wrapper,SearchInput,SearchWrapper,SearchButton,ContentModalButton,ButtonTitle} from './styled';
import React,{useEffect} from 'react';
import {ResultsList} from '../../components/Results/ResultsList';
import {EditModal} from '../../modals/EditModal';
import {ContentModal} from '../../modals/ContentModal'
import { connect } from 'react-redux';
import {getSearchResults,addSearchItemAction,deleteSearchItemAction,editSearchItemAction} from '../../redux/search/actions';
import {openModal,closeModal} from '../../redux/navigation/actions'
import { useState } from 'react';


export const SearchScreenContainer = ({
    items,isModalOpened,getSearchResults,addSearchItemAction,deleteSearchItemAction,editSearchItemAction,openModal,closeModal
})=>{
    const [inputValue,setInputValue] = useState('');
    const [isEditModalVisible,setIsEditModalVisible] = useState(false);
    const [editableItem,setEditableItem] = useState({});

    useEffect(()=>{
       getSearchResults('mama')
    },[])


    const handleSearch = ()=>{
        getSearchResults(inputValue) 
    }

    const handleSubmitEdit = (title)=>{
        console.log('title222',title)
        editSearchItemAction({...editableItem,title})
    }

    const handleEditItem = (item)=>{
        setEditableItem(item)
        setIsEditModalVisible(true)
    }


    return (
        <Wrapper>
            <ContentModalButton onPress={openModal}>
                <ButtonTitle>Open Content Modal</ButtonTitle>
                </ContentModalButton>
            <SearchWrapper>
            <SearchInput value={inputValue} onChangeText={setInputValue}/>
            <SearchButton onPress={handleSearch}>
                </SearchButton>
            </SearchWrapper>
            <ResultsList
            addSearchItem={addSearchItemAction}
            deleteSearchItem={deleteSearchItemAction}
            setEditSearchItem={handleEditItem}
            items={items} />
            <EditModal
            submitEditTitle={handleSubmitEdit}
             editableItem={editableItem} isVisible={isEditModalVisible} setIsVisible={setIsEditModalVisible}
             />
        <ContentModal onClose={closeModal} isVisible={isModalOpened} />
        </Wrapper>
    )
}

export const SearchScreen = connect(
    ({searchReducer,navigationReducer}) => ({
    isLoading: searchReducer.isLoading,
    items: searchReducer.items,
    isModalOpened: navigationReducer.isModalOpened
  }),
  (dispatch) => ({
          getSearchResults: (query)=>dispatch(getSearchResults(query)),
          addSearchItemAction: (item) => dispatch(addSearchItemAction(item)),
          deleteSearchItemAction: (id)=>dispatch(deleteSearchItemAction(id)),
          editSearchItemAction: (newItem) => dispatch(editSearchItemAction(newItem)),
          openModal:()=>dispatch(openModal()),
          closeModal:()=>dispatch(closeModal()),
  })
  )(SearchScreenContainer);
  
