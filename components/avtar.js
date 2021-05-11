import React from 'react';
import {View, Image, Text} from 'react-native';

const Avtar = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={props.imageSource}
        style={{
          width: 65,
          height: 65,
          margin: 10,
          borderRadius: 65 / 2,
          backgroundColor: 'black',
        }}></Image>
      <Text >{props.username}</Text>
    </View>
  );
};
export default Avtar;
