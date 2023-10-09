import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faHouse,
  faUser,
  faFilePen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <FontAwesomeIcon icon={faBars} style={styles.logo} size={30} />
      </View>

      <View style={styles.mainsection}>
            <Text style={styles.title}>
                  Home Page
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                 <Text>
                        Login
                  </Text> 
            </TouchableOpacity>
            

      </View>

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

        <TouchableOpacity>
          <FontAwesomeIcon icon={faUser} style={styles.toolbaricon} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: width,
    minHeight: height,
    backgroundColor: "#fff",
  },

  navbar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 5,
    paddingTop: 40,
    paddingBottom: 5,
    elevation: 1,
  },
  logo: {
    color: "#114D80",
  },

  

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  mainsection: {
      width: '100%',

      paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    color: "#2296F3",
    fontWeight: "bold",
//     alignSelf: 'flex-start'
  },
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
});

export default Home;
