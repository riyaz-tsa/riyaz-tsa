import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../style/style';
import SearchBar from '../components/searchbar';
import Avtar from '../components/avtar';
import ContactCard from '../components/contactCard';
export default class Home extends Component {
  images = {
    avtar1: require('../assets/pic1.jpg'),
    avtar2: require('../assets/pic2.jpg'),
    avtar3: require('../assets/pic3.jpg'),
    avtar4: require('../assets/pic4.jpg'),
    avtar5: require('../assets/pic5.jpg'),
  };

  render(props) {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <SearchBar></SearchBar>
        </View>
        <ScrollView>
          <Text style={{padding: 15, fontWeight: 'bold', fontSize: 16}}>
            Recently Viewed
          </Text>
          <ScrollView horizontal={true}>
            <Avtar username="Lucy" imageSource={this.images.avtar1}></Avtar>
            <Avtar username="Mike" imageSource={this.images.avtar2}></Avtar>
            <Avtar username="Arthur" imageSource={this.images.avtar3}></Avtar>
            <Avtar username="Quilein" imageSource={this.images.avtar4}></Avtar>
            <Avtar username="Riyaz" imageSource={this.images.avtar5}></Avtar>
            <Avtar username="Lucy" imageSource={this.images.avtar1}></Avtar>
            <Avtar username="Mike" imageSource={this.images.avtar2}></Avtar>
            <Avtar username="Arthur" imageSource={this.images.avtar3}></Avtar>
            <Avtar username="Quilein" imageSource={this.images.avtar4}></Avtar>
            <Avtar username="Riyaz" imageSource={this.images.avtar5}></Avtar>
          </ScrollView>
          <ContactCard
            name="Lucy"
            imageSource={this.images.avtar1}></ContactCard>
          <ContactCard
            name="Mike"
            imageSource={this.images.avtar2}></ContactCard>
          <ContactCard
            name="Arthur"
            imageSource={this.images.avtar3}></ContactCard>
          <ContactCard
            name="Quilein"
            imageSource={this.images.avtar4}></ContactCard>
          <ContactCard
            name="Riyaz"
            imageSource={this.images.avtar5}></ContactCard>
        </ScrollView>
      </View>
    );
  }
}
