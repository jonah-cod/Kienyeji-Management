import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
            Kienyeji Management
      </Text>
          <Image source={require('../assets/kienyeji.png')} style={styles.image}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
            flex:1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            maxWidth: width,
            marginTop: 40
      },

      title:{
            fontSize: 24,
            marginVertical: 20,
            color: "#2296F3",
            fontWeight: "bold",
            textAlign: "center",
      },
      
      image:{
            width: 100,
            height: 100,
            borderRadius:50,
      }
      
})

export default Home

