import React from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import {
  ModalWrapper,
  Block,
  ModalHeader,
  Title,
  CenteredView,
  CloseButton,
  ModalHeaderTitleWrapper,
} from './styled';

export const ContentModal = ({ isVisible, onClose, submitEditTitle }) => {
  // return (
  //   <View style={{ flex: 1 }}>
  //     <TouchableOpacity onPress={onClose}>
  //       <Text>Show Modal</Text>
  //     </TouchableOpacity>
  //     <Modal isVisible={isVisible}>
  //       <View style={{ flex: 1 }}>
  //         <Text>Hello!</Text>
  //         <TouchableOpacity onPress={onClose}>
  //           <Text>Hide me!</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </Modal>
  //   </View>
  // );
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <ModalWrapper>
        <ModalHeader>
          <Title>Content</Title>
          <CloseButton onPress={onClose}>
            <Title>X</Title>
          </CloseButton>
        </ModalHeader>
        <Title>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Title>
      </ModalWrapper>
    </Modal>
  );
};
