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
            //mtl: asset('death-star.mtl')
          }}
          style={{
            transform: [{ translate: [0, 0, -2] }, { rotateY: "110deg" }],
          }}
          texture={
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"
          }
          wireframe={false}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent(
  "RecatVrIntro4_importing3dModels",
  () => RecatVrIntro4_importing3dModels
);
