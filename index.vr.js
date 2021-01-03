import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Animated,
} from "react-vr";
//
//
//
import { Easing } from "react-native";
//
export default class RecatVrIntro4_importing3dModels extends React.Component {
  constructor() {
    super();
    this.state = { spin: new Animated.Value(0) };
  }
  //
  //
  componentDidMount() {
    Animated.timing(this.state.spin, {
      toValue: 1,
      duration: 3000,
      easing: Easing.ease,
    }).start();
  }
  //
  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    //
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    //return

    return (
      <View>
        <Pano source={asset("Space.jpg")} />
        <AnimatedModel
          source={{
            obj: asset("death-star.obj"),
            //mtl: asset('death-star.mtl')
          }}
          style={{
            transform: [{ translate: [0, 0, -8] }, { rotate: spin }],
          }}
          //
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
