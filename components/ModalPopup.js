import { View, Text, Modal, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const { height, width } = Dimensions.get("window");
const ModalPopup = ({ open, closeModal, openModal}) => {
  
  return (
    <Modal
      onRequestClose={closeModal}
      transparent={true}
      visible={open}
      animationType="slide"
      style={styles.modal}
    >
      <View style={styles.box}>

      <TouchableOpacity onPress={()=>closeModal()}>
        <Text style={{color: 'red', fontSize: 20, fontWeight: '800'}}>
          X
        </Text>
      </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // position: 'relative'
  },
  box: {
    height: height * 0.2,
    backgroundColor: "#fff",
    paddingHorizontal:20,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 60,
    elevation: 1,
    borderTopWidth: 1,
    borderColor: "#ffefef",
    alignItems:'flex-end'
  },
});

export default ModalPopup;
