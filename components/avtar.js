import React from 'react';
import {View, Image, Text} from 'react-native';
import style from '../style/style';

const Avtar = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={props.imageSource}
        style={style.circleAvtar
        }></Image>
      <Text >{props.username}</Text>
    </View>
  );
};
export default Avtar;
