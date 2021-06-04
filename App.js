/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, Image, Button, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {AppStyles} from './App.Styles';
import ModalScreen from './components/ModalScreen';


const App = () => {
  const [text, setText] = useState('empty');
  const [showModal, setShowModal] = useState(false);
  const handleChange = value => {
    setText(value);
  };

  return (
    <ScrollView>
      <Text>TEST MODAL</Text>
      <Button title={'Show Modal'} onPress={() => setShowModal(true)}></Button>
     <ModalScreen showModal={showModal} setShowModal= {setShowModal}/>
      <Text >IMAGEN</Text>

      <View style={{ alignItems: 'center', margin: 20 }}>
        <TouchableWithoutFeedback onPress={() => alert('Press with out feedback')}>
          <Image style={{ height: 200, width: 150 }}
            source={{ uri: 'https://vanhackblobstorageprod.blob.core.windows.net/profileimages/d2950a1b-c664-4065-a9e8-b95baa465cc1.jpeg' }}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableHighlight onPress={() => alert('Touchable high light')}>
          <Image style={{ height: 200, width: 150 }}
            source={require('./images/react-native.jpg')}
          />
        </TouchableHighlight>
        <TouchableOpacity onPress={() => { alert('TouchableOpacity ') }}>
          <Image style={{ height: 200, width: 150 }}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </TouchableOpacity>
      </View>

      <Text>INPUT</Text>
      <TextInput style={{ borderWidth: 1, margin: 20, borderRadius: 5 }} onChangeText={(value) => handleChange(value)} />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{text}</Text>
      <Button onPress={() => alert('HELLOW BTN')} title={'Click me'}></Button>

      <Text>CONTAINERS</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'green', width: '33.3%', height: 150 }} />
        <View style={{ backgroundColor: 'blue', width: '33.3%', height: 150 }} />
        <View style={{ backgroundColor: 'red', width: '33.3%', height: 150 }} />
        
      </View>
      <View style={AppStyles.container} />
    </ScrollView >
  );
};

export default App;
