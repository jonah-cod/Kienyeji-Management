import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
      faHouse,
      faUser,
      faFilePen,
      faPlus,} from '@fortawesome/free-solid-svg-icons';

import ModalPopup from './ModalPopup';

const bottomTab = () => {

  const [open, setOpen] = useState(false);

  
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
      <View style={styles.toolbar}>
      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faHouse}
          style={styles.toolbaricon}
          size={24}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faFilePen}
          style={styles.toolbaricon}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faPlus} style={styles.toolbaricon} size={24} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setOpen(true)}>
        <FontAwesomeIcon icon={faUser} style={styles.toolbaricon} size={24} />
      </TouchableOpacity>
      <ModalPopup openModal={openModal} closeModal={closeModal} open={open}>

      </ModalPopup>
    </View>
  )
}

const styles = StyleSheet.create({

      toolbar: {
            backgroundColor: "#114D80",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            position: "absolute",
            bottom: 0,
          },
        
          toolbaricon: {
            color: "#fff",
          },
})

export default bottomTab