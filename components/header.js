import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default AppBar = () => {
  return (
    <View
      style={{
        height: 60,
      }}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
        showHideTransition="none"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-between',
          }}>
          <Icon size={25} name="arrow-back" />
          <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 20}}>
            Find Members
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <Image
            source={require('../assets/menu.png')}
            style={{width: 30, height: 18, margin: 10}}
          />

          <Image
            source={require('../assets/location.png')}
            style={{width: 25, height: 25, margin: 10}}
          />
        </View>
      </View>
    </View>
  );
};
