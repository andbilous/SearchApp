import React, { useEffect } from 'react';
import { Text, Button, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';
import { NameWrapper, Wrapper } from './styled';

export const PreviewScreen: React.FC = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      setImage('file://' + result.uri);
      return;
    }
    setImage(null);
    setFileName(result.name);
  };

  console.log(image);

  return (
    <Wrapper>
      <Button title='Select Document' onPress={_pickDocument} />
      <NameWrapper>
        <Text>{fileName}</Text>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </NameWrapper>
    </Wrapper>
  );
};
