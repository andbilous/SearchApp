import styled from 'styled-components/native';

export const ModalWrapper = styled.View`
  height: 300px;
  width: 70%;
  margin-top: 300px;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  padding: 5px;
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
  border-radius: 20px;
`;

export const Title = styled.Text``;

export const CenteredView = styled.View``;

export const CloseButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;

export const ModalHeaderTitleWrapper = styled.View``;

export const ModalContainer = styled.View`
  padding: 25px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
