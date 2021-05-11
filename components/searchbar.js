import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchBar = () => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'white',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
        elevation: 10,
      }}>
      <View
        style={{
          borderRadius: 25,
          height: 50,
          marginVertical: 20,

          flexDirection: 'row',
          marginHorizontal: 30,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.12,
          shadowRadius: 10,
          elevation: 10,
        }}>
        <TextInput
          placeholderTextColor="#c8d6e5"
          placeholder="Search"
          style={{
            color: 'black',
            
            width: 370,
            paddingHorizontal: 20,
            borderRadius: 25,
            height: 50,
            backgroundColor: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
        <View
          style={{
            height: 50,
            width: 50,
            right: 50,
            bottom: 20,
            marginVertical: 20,
            backgroundColor: '#feca57',
            borderRadius: 30,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Icon style={{alignSelf: 'center'}} size={25} name="search" />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
