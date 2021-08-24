import React from 'react';
import { Modal } from 'react-native';
import {
  ModalWrapper,
  ModalHeader,
  Title,
  CenteredView,
  CloseButton,
  HeaderTitle,
  Content,
} from './styled';

import { HorizontalLine } from '../styled';

import { ContentModalProps } from './types';

export const ContentModal: React.FC<ContentModalProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <ModalWrapper>
        <ModalHeader>
          <HeaderTitle>Content</HeaderTitle>
          <CloseButton onPress={onClose}>
            <Title>X</Title>
          </CloseButton>
        </ModalHeader>
        <HorizontalLine />
        <CenteredView>
          <Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Content>
        </CenteredView>
      </ModalWrapper>
    </Modal>
  );
};
