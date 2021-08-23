import styled from 'styled-components/native';

export const Wrapper = styled.View`
  border: 1px solid black;
  height: 80%;
  margin-top: 200px;
`;

export const SearchInput = styled.TextInput`
  border: 1px solid black;
`;

export const ListWrapper = styled.View`
  overflow: hidden;
  max-height: 500px;
`;

export const ListItemWrapper = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
`;

export const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  background-color: green;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  background-color: red;
`;

export const EditButton = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  background-color: grey;
`;
