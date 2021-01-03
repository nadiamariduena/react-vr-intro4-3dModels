import React from "react";
import { AppRegistry, asset, Pano, Text, View, Model } from "react-vr";
export default class RecatVrIntro4_importing3dModels extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("Space.jpg")} />
        <Model
          source={{
            obj: asset("death-star.obj"),
          }}
          style={{
            transform: [{ translate: [0, 0, -2] }],
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent(
  "RecatVrIntro4_importing3dModels",
  () => RecatVrIntro4_importing3dModels
);
