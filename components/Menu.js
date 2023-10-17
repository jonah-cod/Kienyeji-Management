import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, {useRef, useState} from 'react';
import {
  Button,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';



  const menuNavigation = (drawer) => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.heading}>MENU</Text>
      
      <TouchableOpacity onPress={() => drawer.current.closeDrawer()}>
            <FontAwesomeIcon icon={faXmark} size={24} style={styles.close}/>
      </TouchableOpacity>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
    elevation: 1
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#114D80',
    fontWeight: "bold",
  },

  close:{
      color: 'red',
      fontWeight: "800",
  }
});

export default menuNavigation;