import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const ContactCard = props => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={props.imageSource}
          style={{
            width: 65,
            height: 65,
            margin: 10,
            borderRadius: 65 / 2,
            backgroundColor: 'black',
          }}></Image>
        <View style={{justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 5}}>
                {props.name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',

                left: 210,
              }}>
              <View
                style={{
                  backgroundColor: '#c8d6e5',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  margin: 5,
                }}>
                <Image
                  source={require('../assets/whatsapp.png')}
                  style={{width: 20, height: 20}}></Image>
              </View>
              <View
                style={{
                  backgroundColor: '#c8d6e5',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  margin: 5,
                }}>
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
      <View
        style={{
          borderBottomColor: '#c8d6e5',
          borderBottomWidth: 1,
          marginTop: 15,
          marginHorizontal: 20,
          marginVertical: 5,
        }}
      />
      <View
        style={{justifyContent: 'flex-end', flexDirection: 'row', padding: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#feca57',
            margin: 5,
            width: 100,
            height: 40,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <Text style={{alignSelf: 'center'}}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            margin: 5,
            width: 100,
            height: 40,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <Text style={{alignSelf: 'center', color: '#feca57'}}>Block</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactCard;
