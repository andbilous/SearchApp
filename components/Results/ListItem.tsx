import React from 'react';
import {Text} from 'react-native';
import {ListItemWrapper,AddButton,DeleteButton,EditButton} from '../styled'



export const ListItem = ({item,setEditSearchItem,onDelete}) =>{

    const handleDelete = ()=>{
        onDelete(item);
    }

    const handleEdit = ()=> setEditSearchItem(item);

    
    return (
        <ListItemWrapper>
        <Text>{item.title}</Text>
        <EditButton onPress={handleEdit}><Text>Edit</Text></EditButton>
       <DeleteButton onPress={handleDelete}><Text>DELETE</Text></DeleteButton>
   
        </ListItemWrapper>
    )
}