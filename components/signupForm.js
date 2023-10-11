import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SignupForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View >
            <Text style={styles.label}>Full Names</Text>
            <TextInput 
                  placeholder='Type your full names'
                  placeholderTextColor={'#fff'}
                  style={styles.input}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput 
                  placeholder='Type your email'
                  placeholderTextColor={'#fff'}
                  style={styles.input}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
                  placeholder='Type a new password'
                  placeholderTextColor={'#fff'}
                  style={styles.input}
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput 
                  placeholder='Confirm password'
                  placeholderTextColor={'#fff'}
                  style={styles.input}
            />

            <TouchableOpacity style={styles.but}>
                  <Text style={[styles.text, styles.textcenter]}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={[styles.textb4link, styles.textcenter]}>Already have an Account, 
                  <Text style={styles.link} onPress={()=>navigation.navigate('login')}> Login</Text>
            </Text>
      </View>
    </View>
  )
}




const styles = StyleSheet.create({
      container: {
            width: width,
            paddingHorizontal: 20,
            backgroundColor: '#114D80',
            minHeight: height,
            paddingTop: 40
      },
      title: {
            fontSize: 20,
            marginVertical: 20,
            color: "#2296F3",
            fontWeight: "bold",
            textAlign: "center",
      },
      label:{
            marginTop: 10,
            color:'#848C98',
            fontSize: 16,
            fontWeight: 'bold'
      },
      input: {
            borderColor: "#fff",
            borderWidth: 2,
            paddingVertical: 10,
            paddingHorizontal: 24,
            borderRadius: 24,
            marginVertical: 10,
            color: '#fff',
            
      },

      but: {
            paddingVertical: 10,
            paddingHorizontal: 24,
            borderRadius: 24,
            marginVertical: 20,
            backgroundColor: "#2296F3",
            
      },
      text: {
            fontWeight: "600",
            color: "#fff",
            fontSize: 20,
      },
      textb4link:{
            color: '#838C95',
            fontSize: 18,
            marginVertical: 20
      },
      link: {
            color: "#2296F3",
            marginVertical: 20,
            fontSize: 18,
      },
      textright: {
            textAlign: "right",
      },

      textcenter: {
            textAlign: "center",
      },

})

export default SignupForm