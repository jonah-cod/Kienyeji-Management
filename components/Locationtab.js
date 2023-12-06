import { Text, View } from 'react-native'
import React, { useEffect } from 'react';
import * as Location from 'expo-location';

export function Locationtab () {



      useEffect(() => {
        const getLocation = async ()=>{
            const {status} = await Location.getBackgroundPermissionsAsync()
            if (status !== 'granted') {
                  console.log("Grant permission")
            }

            let location = await Location.getCurrentPositionAsync()
            console.log(location)
        }

        getLocation()
        
      }, [])
      
  
    return (
      <View>
        <Text>Locationtab</Text>
      </View>
    )
  
}

export default Locationtab