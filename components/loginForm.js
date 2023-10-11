import {
      Text,
      View,
      StyleSheet,
      TextInput,
      TouchableOpacity,
      Dimensions,
      Linking,
      Image
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LoginForm = ({navigation}) => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleSubmit = () => {
            console.log(email, password);
      };

      return (
            <View style={styles.bigcontainer}>
            <View style={styles.container}>
                  <Image source={require('../assets/kienyeji.png')} style={styles.image}/>
                  <Text style={styles.title}>Login</Text>
                  <View style={styles.formcontainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                              placeholder="e.g email@example.com"
                              placeholderTextColor={'#fff'}
                              style={styles.input}
                              onChangeText={(value) => setEmail(value)}
                              value={email}
                        />
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                              placeholder="e.g your password"
                              placeholderTextColor={'#fff'}
                              style={styles.input}
                              onChangeText={(value) => setPassword(value)}
                              secureTextEntry={true}
                              value={password}
                        />
                        <Text
                              onPress={() => Linking.openURL("#")}
                              style={[styles.textb4link, styles.textright]}
                        >
                              Forgot password?
                              <Text style={styles.link}> Reset.</Text>
                        </Text>

                        <TouchableOpacity style={styles.but} onPress={handleSubmit}>
                              <Text style={[styles.text, styles.textcenter]}>Submit</Text>
                        </TouchableOpacity>

                        
                  </View>
            </View>

            <View style={styles.iconscontainer}>
                  <View style={styles.icons}>
                        <FontAwesomeIcon icon={faFacebookF} style={{color:'#2296F3'}}/>
                  </View>
                  <View style={styles.icons}>
                        <FontAwesomeIcon icon={faGoogle} style={{color: '#A83A24'}}/>
                  </View>
            </View>
            <Text
                              onPress={() => Linking.openURL("#")}
                              style={[styles.textb4link, styles.textcenter]}
                        >
                              Don't have an account?
                              <Text style={styles.link} onPress={() => navigation.navigate("signup")}> Register
                              </Text>
                              .
                        </Text>
            </View>
      );
};

const styles = StyleSheet.create({
      bigcontainer:{
            minHeight: height,
            backgroundColor: '#121212'
      },
      container: {
            width: width,
            paddingHorizontal: 20,
            paddingTop:50,
            backgroundColor: '#114D80',
            minHeight: '80%',
            alignItems: 'center',
            borderBottomLeftRadius: 75,
            borderBottomRightRadius: 75,
      },
      image:{
            width: 100,
            height: 100,
            borderRadius:50,
            
      },
      title: {
            fontSize: 20,
            marginVertical: 20,
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
      },

      formcontainer:{
            width: "100%"
      },
      label: {
            marginTop: 10,
            color: "#848C98",
            fontSize: 16,
            fontWeight: "bold",
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
            marginVertical: 10,
            backgroundColor: "#2296F3",
      },
      text: {
            fontWeight: "600",
            color: "#fff",
            fontSize: 20,
      },
      textb4link: {
            color: "#838C95",
            fontSize: 18,
            marginVertical: 20,
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
      iconscontainer: {
            flex: 1,
            alignItems:"center",
            justifyContent: 'space-around',
            flexDirection: 'row'
      },

      icons:{
            maxWidth: 75,
            borderRadius: 50,            
            backgroundColor: '#292929',
            paddingHorizontal: 28,
            paddingVertical: 8,
            
      }
});

export default LoginForm;
