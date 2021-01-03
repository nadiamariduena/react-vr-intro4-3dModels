# ReactVR _Importing 3D Models_

## Installation

- Click on the image to visit the repo (with the installation steps)

[<img src="./img/default-chess.gif"/>](https://github.com/nadiamariduena/react-vr-intro1)

<br>
<br>
<br>

#### _AFTER YOU HAVE INSTALLED THE DEFAULT SETTINGS_ 🐖

<br>

- CHANGE/UPDATE the chess default image
- Download this image and add it to the static_assets FOLDER

- Name the image Space.jpg

[Download this photo at the highest resolution](https://flic.kr/p/5C3Bcx)

-Finally, let’s update the Pano component in index.vr.js like so:

```javascript
//
<Pano source={asset("Space.jpg")} />
// HERE in this area of the file
//
//
//  ---------------- ° ------------------
export default class RecatVrIntro4_importing3dModels extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
```

<br>

- Also, go ahead and remove the Text component.


<br>

#### RESULT 👾

[<img src="./img/changing-pano-image.gif"/>]()

<!-- # React 360 _VR VIDEOS_

## Learning how to add Videos to 360 scene

  <hr>
  <br>

 ## WARNING!!

#### ⚠️ Video issues related to adblocker 🕵️

- SOMETIMES the video takes more than 10 secs to load, its due to how long the bundle takes to build

- After completing the tutorial, I spent more than an hour trying to figure out "why?" the video didn't show,
  at the end I decided to test it in another browser and bingo, I realized that it was related to my adblocker

[<img src="./img/browsers-issues.gif"/>]()

- MOZILLA seems to work perfectly (without adblocker of course) -->
