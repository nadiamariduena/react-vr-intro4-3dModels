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

[Download this photo at the highest resolution](https://flic.kr/p/5C3Bcx)

<br>

- Name the image Space.jpg

- Finally, let’s update the Pano component in index.vr.js like so:

```javascript
//
<Pano source={asset("Space.jpg")} />
//
//
//
//  ---------------- ° ------------------
//  HERE in this area of the file
//  ---------------- ° ------------------
//
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

  <br>

- The file ending in .mtl refers to the material of the model.
- The file ending in .obj refers to the object of the model.
- I like to think of .obj files as the container and .mtl as the fill.

<br>

mtl is the yellow and the "white" is the .obj "the container"

  <div style="display: flex; justify-content: center;"><img src="./img/egg.jpg"/></div>

  <br>
  <br>

### Visualizing the Object

- Since you might be curious to see this difference even more clearly, we can actually render just the object with no material.

<br>

- In index.vr.js, let’s import model:

```javascript
import { AppRegistry, asset, Pano, Text, View, Model } from "react-vr";
```

<br>

NOW render the death-star.obj like so:

```javascript
<View>
  <Pano source={asset("Space.jpg")} />
  <Model
    source={{
      obj: asset("death-star.obj"),
    }}
  />
</View>
```

<br>

#### RESULT 👾

  <div style="display: flex; justify-content: center;"><img src="./img/whitepage-after-deathstar.jpg"/></div>

- A _GIANT_ white page, I refreshed many times thinking there was an issue , then i tried with another browser, then i thought "what if the moon was already there but just too big" so i zoomed out with the browser but it doesn't work with like that.

<br>

  <div style="display: flex; justify-content: center;"><img style="width: 300px;" src="./img/smart-black-dude.gif"/></div>

<br>

##### SO I TRIED THE FOLLOWING

- ADD THE STYLE under the source "block" , the -2 is going to make the white moon zoom out (1 is really close)

```javascript
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
```
