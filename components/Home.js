import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  DrawerLayoutAndroid
} from "react-native";
import React, {useRef} from "react";


import { WeekCalendar, CalendarProvider } from "react-native-calendars";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faBell,
} from "@fortawesome/free-solid-svg-icons";


import menuNavigation from "./Menu";
import BottomTab from "./BottomTab";
import Locationtab from "./Locationtab";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = ({ navigation }) => {

  const drawer = useRef(null)
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={width*.75}
      drawerPosition={'right'}
      renderNavigationView={()=>menuNavigation(drawer)}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <TouchableOpacity onPress={()=>drawer.current.openDrawer()}>
          <FontAwesomeIcon icon={faBars} style={styles.logo} size={30} />
        </TouchableOpacity>
        
      </View>

      <ScrollView style={styles.scrollview}>
        <View style={styles.mainsection}>
          <View style={styles.topbar}>
            <View style={styles.greetings}>
              <Text style={styles.title}>Hello Seargent,</Text>
              <Text style={styles.subtitle}>Here is what we have for you.</Text>
            </View>
            <TouchableOpacity style={styles.notification}>
              <FontAwesomeIcon
                icon={faBell}
                style={styles.notificationitem}
                size={20}
              />
              <Text style={styles.dot}></Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "800",
              color: "#121212",
              marginVertical: 20,
            }}
          >
            Farm survey
          </Text>

          <ScrollView horizontal={true} scrollIndicatorInsets={true}>
            <View style={styles.farmsurvey}>
              <View style={styles.surveyitem}>
                <Image
                  style={styles.surveyimage}
                  source={require("../assets/bird.png")}
                />
                <Text style={styles.surveynumber}>550</Text>
                <Text style={styles.surveytitle}>Birds</Text>
              </View>

              <View style={styles.surveyitem}>
                <Image
                  style={styles.surveyimage}
                  source={require("../assets/eggs.png")}
                />
                <Text style={styles.surveynumber}>1099</Text>
                <Text style={styles.surveytitle}>Eggs collected</Text>
              </View>

              <View style={styles.surveyitem}>
                <Image
                  style={styles.surveyimage}
                  source={require("../assets/feeds.png")}
                />
                <Text style={styles.surveynumber}>150</Text>
                <Text style={styles.surveytitle}>KGS of Feeds</Text>
              </View>

              <View style={styles.surveyitem}>
                <Image
                  style={styles.surveyimage}
                  source={require("../assets/chick.png")}
                />
                <Text style={styles.surveynumber}>350</Text>
                <Text style={styles.surveytitle}>Chicks</Text>
              </View>
            </View>
          </ScrollView>

          <Text style={{fontSize: 24, fontWeight:'800', color: '#121212', marginVertical:20}}>Upcoming Events</Text>
          <View style={styles.events}>
          <CalendarProvider date={'2023-10-10'} 
                            showTodayButton={true} 
                            todayButtonStyle={{bottom: 15, right: -255}} 
                            testID="calendars" 
                            theme={{todayButtonTextColor: "#00AAAF"}}
                            style={{marginTop: 10}}
                            >

            <WeekCalendar firstDay={1} showWeekNumbers={true} />
          </CalendarProvider>
            
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <Locationtab/>
      </ScrollView>
            
      <BottomTab/>
    </View>
    </DrawerLayoutAndroid>
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

  scrollview: {
    width: "100%",
    marginBottom: 80,
  },

  mainsection: {
    width: "100%",

    paddingHorizontal: 20,
  },

  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: "#114D80",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16
    ,
    color: "#114D80",
    fontWeight: "bold",
  },
  notification: {
    position: "relative",
  },

  notificationitem: {
    color: "#114D80",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#A83A24",
    position: "absolute",
    right: 2,
    top: -2,
  },

  farmsurvey: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    gap: 10,
  },

  surveyitem: {
    width: 200,
    height: 300,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",

    backgroundColor: "#E7F5FA",
    borderRadius: 10,
  },
  surveyimage: {
    width: "100%",
    objectFit: "contain",
    margin: 0,
  },
  surveynumber: {
    margin: 0,
    color: "#121212",
    fontSize: 24,
    fontWeight: "800",
  },
  surveytitle: {
    margin: 0,
    color: "#121212",
    fontSize: 16,
    fontWeight: "600",
  },

  
});

export default Home;
