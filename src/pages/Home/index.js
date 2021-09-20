import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StatusBar, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../../components';

import styles from './styles';

export const Home = props => {

  const id = 'c3r_Kg_JXoigWLGlKKivBEwhOQ6DzXv6xcUbWCclU_s';
  const [data, setData] = useState(null);

  const download = () => {
    Linking.openURL(data.links.download)
  }

  const search = async () => {
    await fetch(`https://api.unsplash.com/photos/random/?client_id=${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      response.json().then((json) => {
        setData(json)
      })
    });
  }
  
  if(data){
    return(
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#fff' hidden/>
        <Image style={styles.image} resizeMode='contain' source={{uri: data.urls.small}}/>
        <Text style={styles.title}>{data.alt_description}</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{...styles.title, fontWeight: 'bold'}}>by </Text>
          <TouchableOpacity onPress={() => {
            Linking.openURL(data.links.html);
          }}>
            <Text style={{...styles.title, fontWeight: 'bold', color: '#44f'}}>{data.user.name}</Text>
          </TouchableOpacity>
        </View>
        
        <Button text='random image' onPress={search} height={45} width={160} />
        <Button text='download' onPress={download} height={45} width={160} />
      </View>
    );
  }
  return(
    <View style={{...styles.container, justifyContent: 'center'}}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' hidden/>
      <Button text='random image' onPress={search} height={45} width={160} />
      <Button text='download' onPress={download} height={45} width={160} />
    </View>
  );
}
