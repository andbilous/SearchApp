import React, { useState, useEffect } from 'react';
import { Modal, Text } from 'react-native';

import { ModalContainer, EditModalWrapper, EditInput } from './styled';

import { EditModalProps } from './types';

import { ButtonContainer } from '../styled';

export const EditModal: React.FC<EditModalProps> = ({
  isVisible,
  setIsVisible,
  editableItem,
  submitEditTitle,
}) => {
  const [value, setValue] = useState(editableItem.title);

  useEffect(() => {
    setValue(editableItem.title);
  }, [editableItem.title]);

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
          <EditInput value={value} onChangeText={setValue} />
          <ButtonContainer
            onPress={() => {
              submitEditTitle(value);
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
