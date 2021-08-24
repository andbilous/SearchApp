import styled from 'styled-components/native';

export const ModalWrapper = styled.View`
  height: 300px;
  width: 70%;
  margin-top: 300px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  padding: 10px;
`;

export const Block = styled.View`
  border: 1px solid black;
  height: 80%;
  margin-top: 200px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

export const Title = styled.Text``;

export const CenteredView = styled.View`
  padding: 10px;
  margin-bottom: 10px;
  color: white;
`;

export const Content = styled.Text`
  color: black;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;

export const ModalContainer = styled.View`
  padding: 25px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  margin-left: 35%;
`;

export const EditModalWrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: red;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
`;

export const EditInput = styled.TextInput``;
