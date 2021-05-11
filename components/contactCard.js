import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import style from '../style/style';
import Colors from './colors';

const ContactCard = props => {
  return (
    <View style={style.cardBox}>
      <View style={{flexDirection: 'row'}}>
        <Image source={props.imageSource} style={style.circleAvtar} />
        <View style={{justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={style.userName}>{props.name}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',

                left: 210,
              }}>
              <View style={style.socialW}>
                <Image
                  source={require('../assets/whatsapp.png')}
                  style={{width: 20, height: 20}}></Image>
              </View>
              <View style={style.socialP}>
                <Image
                  source={require('../assets/telephone.png')}
                  style={{width: 20, height: 20}}></Image>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/building.png')}
              style={{width: 15, height: 15}}></Image>
            <Text
              style={{
                color: '#576574',
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
              Pacific Aqua Service
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/atom.png')}
              style={{width: 15, height: 15}}></Image>
            <Text
              style={{
                color: '#c8d6e5',
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
              Personal Care - Appearance Services
            </Text>
          </View>
        </View>
      </View>
      <View style={style.divider} />
      <View
        style={{justifyContent: 'flex-end', flexDirection: 'row', padding: 10}}>
        <TouchableOpacity style={style.followbtn}>
          <Text style={{alignSelf: 'center'}}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.blockbtn}>
          <Text style={{alignSelf: 'center', color: Colors.primary}}>
            Block
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactCard;
