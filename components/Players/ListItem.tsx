import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ListItemWrapper } from '../styled';
import { ItemWrapper } from '../../styled';
import uuid from 'react-native-uuid';

export const ListItem: React.FC<any> = ({ item, setEditablePlayer }) => {
  // const handleEdit = () => setEditablePlayer(item);

  return (
    <ListItemWrapper>
      <ItemWrapper>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/user-icon.png')}
        />
        <Text style={styles.title}>
          Player : {item.firstName} {item.lastName}
        </Text>
        {Object.entries(item).map((value) => (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            key={uuid.v4()}
          >
            <Text numberOfLines={1}>{value[0].toUpperCase()}</Text>
            <Text numberOfLines={1}>{value[1]}</Text>
          </View>
        ))}
      </ItemWrapper>
      {/* <ButtonContainer width={100} color='red' onPress={handleEdit}>
        <ButtonTitle>Edit</ButtonTitle>
      </ButtonContainer> */}
    </ListItemWrapper>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
