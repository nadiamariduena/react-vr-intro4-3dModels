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

##### WHILE WE ARE AT IT...

- You can use programs like Blender, 3DS Max, or Maya to create a 3D model and export it to these formats.

There's also a lot of sites where you can download 3D models either for free or at a cost. The following are three of the best ones:

<br>

[TF3DM](https://free3d.com/)
[TurboSquid](https://www.turbosquid.com/Search/3D-Models/free)
[CGTrader](https://www.cgtrader.com/)

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

  <div style="display: flex; justify-content: center;"><img style="width: 150px;" src="./img/smart-black-dude.gif"/></div>

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

<br>

- In the code above, we are placing this object 2 meters back from the starting point.

##### To better see the object, we can also make it a wireframe by adding the following property:

```javascript
<Model
  source={{
    obj: asset("death-star.obj"),
  }}
  style={{
    transform: [{ translate: [0, 0, -2] }],
  }}
  wireframe={true} // <---- ADD THIS
/>
```

##### it will add something like this:

   <div style="display: flex; justify-content: center;"><img  src="./img/wireframe.jpg"/></div>

<br>

##### NOW CHANGE

- CHANGE the recently added "wireframe" from TRUE to FALSE

<br>

#### IMPORTANT !! 🐖

> Edit: The generated death-star.mtl file is supposed to be applying the screenshot texture (that is also in static_assets) to the model. Despite several efforts, I could not get this file to work. Fortunately, there is a texture property where we can specify an http address for a texture image in place of using the .mtl file.

<br>

#### To understand it better:

[Getting Started with React VR](https://www.pluralsight.com/guides/getting-started-with-react-vr)

- I tried to replace few stuff inside the mtl file, like you can see in the link above, but i suspect that you have to do it directly from a software like maya , 3ds max etc to produce a file like this, i tried and it didnt work.

 <div style="display: flex; justify-content: center;"><img  src="./img/example1.jpg"/></div>

<br>

##### You can update your code to the following:

```javascript
<Model
  source={{
    obj: asset("death-star.obj"),
    //mtl: asset('death-star.mtl')
  }}
  style={{
    transform: [{ translate: [0, 0, -2] }],
  }}
  //
  // --------- this
  //
  texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
  wireframe={false}
  //
  // --------- this
  //
/>
```

<br>

### Result 👾

<div style="display: flex; justify-content: center;"><img  src="./img/deathmoon-text.png"/></div>

#### NOW rotate a bit

```javascript
style={{
  transform: [
    {translate: [0, 0, -2]},
    {rotateY: '110deg'}
  ]
}}
```

<br>
<br>
<br>
<hr>
<br>
<br>

### 🏜️ ANIMATION 🏜️
