import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {TitleInput} from './styled';



export const ContentModal = ({isVisible,onClose,submitEditTitle}) =>{
    // const [value,setValue] = useState(editableItem.title);
    // console.log('value',value)

    // useEffect(()=>{
    //         setValue(editableItem.title)
    // },[editableItem.title])


    return (
<View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}

      >
        <View style={styles.centeredView}>
        
          <View style={styles.modalView}>
          <Pressable
              style={[ styles.buttonClose]}
             onPress={onClose}
            >
              <Text  style={styles.textStyle}>Close</Text>
            </Pressable>
            <View>
            
            </View>
              {/* <TitleInput value={value} onChangeText={setValue}>

              </TitleInput> */}
         
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
             
            >
              <Text  style={styles.textStyle}>Content</Text>
            </Pressable> */}
                 <Text  style={styles.textStyle}>Some TExt</Text>
          </View>
         
        </View>
 
      </Modal>
    </View>
    )
    
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      width: '95%',
      height: '50%',
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      borderWidth: 1,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });