import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {TitleInput} from './styled';



export const EditModal = ({isVisible,setIsVisible,editableItem,submitEditTitle}) =>{
    const [value,setValue] = useState(editableItem.title);
    console.log('value',value)

    useEffect(()=>{
            setValue(editableItem.title)
    },[editableItem.title])


    return (
<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <TitleInput value={value} onChangeText={setValue}>

              </TitleInput>
         
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={
                  () =>{
                    submitEditTitle(value)
                    setIsVisible(!isVisible)
                  } 
                
                }
            >
              <Text  style={styles.textStyle}>Save</Text>
            </Pressable>
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
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
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
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });