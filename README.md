# ReactVR _Importing 3D Models_

## Installation 🏜

- Click on the link to visit the repo (with the installation steps)

[Default installation](https://github.com/nadiamariduena/react-vr-intro1)

[<img src="./img/5ele.gif"/>](https://github.com/nadiamariduena/react-vr-intro1)

<br>
<br>
<br>

#### _AFTER YOU HAVE INSTALLED THE DEFAULT SETTINGS_

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

<br>
<br>
<hr>
<br>
<br>

## NOW GRAB THE 3D MODELS

- The best library for free 3D models that I have found is [Clara.io.](https://clara.io/library) , they have a wide variety of 3D models and formats for exporting the 3D models.

##### Search "Death Star"! 👾

<br>

[<img src="./img/3dmodels-library.gif"/>]()

<br>
<br>

#### 👾 Click on Download and select Wavefront OBJ (.obj)

- Currently, this is the file format that React VR supports.

<br>
<br>

[<img src="./img/death-star-example.png"/>]()

<br>
<br>

##### OH YEAH (you have to create an account) to download the stuff... is okay :)

[<img src="./img/loginhell.gif"/>]()

<br>
<br>

### Go ahead and download the Death star ZIP 🐖

- Extract this zip folder into the static_assets folder.
  We can now see two new files:

  <br>

  <div style="display: flex; justify-content: center;"><img src="./img/data-deathstar.png"/></div>
