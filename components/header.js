import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
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
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: 20,
              marginHorizontal: 10,
            }}>
            Find Members
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/menu2.png')}
              style={{width: 30, height: 18, margin: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/location.png')}
              style={{width: 26, height: 26, margin: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
