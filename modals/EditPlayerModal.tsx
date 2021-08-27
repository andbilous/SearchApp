import React, { useState, useEffect } from 'react';
import { Modal, Text } from 'react-native';

import { ModalContainer, EditModalWrapper, EditInput } from './styled';

import { EditModalProps } from './types';

import { ButtonContainer } from '../styled';

export const EditPlayerModal: React.FC<any> = ({
  isVisible,
  setIsVisible,
  editablePlayer,
  submitEditPlayer,
}) => {
  const [player, setPlayer] = useState(editablePlayer);

  const handleChange = (text, field) => {
    // setPlayer(Object.assign(player, { [field]: text }));
    setPlayer(text);
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}
    >
      <ModalContainer>
        <EditModalWrapper>
          <Text>First Name</Text>
          <EditInput
            style={{ borderWidth: 1, padding: 10 }}
            value={player}
            onChangeText={(text) => {
              handleChange(text, 'firstName');
            }}
          />
          <ButtonContainer
            onPress={() => {
              submitEditPlayer(editablePlayer);
              setIsVisible(!isVisible);
            }}
          >
            <Text>Save</Text>
          </ButtonContainer>
        </EditModalWrapper>
      </ModalContainer>
    </Modal>
  );
};
