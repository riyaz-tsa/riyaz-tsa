import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../style/style';
const SearchBar = () => {
  return (
    <View style={style.searchContainer}>
      <View style={style.searchContain}>
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
        <TouchableOpacity style={style.seachbtn}>
          <Icon style={{alignSelf: 'center'}} size={25} name="search" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
