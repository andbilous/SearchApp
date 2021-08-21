
import React,{useCallback} from 'react';
import {FlatList,Text} from 'react-native';
import {ListWrapper,AddButton} from '../styled'
import { ListItem } from './ListItem';




export const ResultsList = ({items,addSearchItem,deleteSearchItem,setEditSearchItem}) =>{

    const keyExtractor = useCallback((item)=> item.cacheId,[])

    const renderItem = useCallback(({item})=><ListItem
     setEditSearchItem={setEditSearchItem}
     onDelete={deleteSearchItem}
     item={item}/>,[])

    
    
    return (
        <ListWrapper>
            <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            />
            <AddButton onPress={addSearchItem}><Text>Add</Text></AddButton>
        </ListWrapper>
    )
}