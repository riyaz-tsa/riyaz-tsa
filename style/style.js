import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../components/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  circleAvtar: {
    width: 65,
    height: 65,
    margin: 10,
    borderRadius: 65 / 2,
    backgroundColor: Colors.secondary,
  },
  cardBox: {
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
  },
  userName: {fontWeight: 'bold', fontSize: 18, paddingVertical: 5},

  socialW: {
    backgroundColor: '#cff0ce',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  socialP: {
    backgroundColor: '#c8d6e5',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  divider: {
    borderBottomColor: '#c8d6e5',
    borderBottomWidth: 1,
    marginTop: 15,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  followbtn: {
    backgroundColor: Colors.primary,
    margin: 5,
    width: 110,
    height: 35,
    borderRadius: 13,
    justifyContent: 'center',
  },
  blockbtn: {
    backgroundColor: 'black',
    margin: 5,
    width: 110,
    height: 35,
    borderRadius: 13,
    justifyContent: 'center',
  },

  searchContainer: {
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
  },
  searchContain: {
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
  },

  seachbtn: {
    height: 50,
    width: 50,
    right: 50,
    bottom: 20,
    marginVertical: 20,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
