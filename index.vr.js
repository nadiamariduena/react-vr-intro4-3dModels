import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class RecatVrIntro4_importing3dModels extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("Space.jpg")} />
      </View>
    );
  }
}

AppRegistry.registerComponent(
  "RecatVrIntro4_importing3dModels",
  () => RecatVrIntro4_importing3dModels
);
