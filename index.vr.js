import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class RecatVrIntro4_importing3dModels extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('RecatVrIntro4_importing3dModels', () => RecatVrIntro4_importing3dModels);
