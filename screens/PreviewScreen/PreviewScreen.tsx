// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export const  PreviewScreen = ()=> {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== 'web') {
//         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== 'granted') {
//           alert('Sorry, we need camera roll permissions to make this work!');
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';
import { NameWrapper, Wrapper } from './styled';

export const PreviewScreen = () => {
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
    setFileName(result.name);
  };

  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Wrapper>
      <Button title='Select Document' onPress={_pickDocument} />
      <View style={{ marginTop: 20 }}>
        <Button title='Select Image' onPress={_pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <NameWrapper>
        <Text>{fileName}</Text>
      </NameWrapper>
    </Wrapper>
  );
};
