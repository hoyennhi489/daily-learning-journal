**Learn CSS Animation by Building a Ferris Wheel**

Step 1-2:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Ferris Wheel</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <div class="wheel">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>

      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
    </div>
  </body>
</html>
```

Step 3-5:
```css
.wheel {
  border: 2px solid black;
  border-radius: 50%;
  margin-left: 50px;
  position: absolute;
  height: 55vw;
  width: 55vw;
  max-height: 500px;
  max-width: 500px;
}
```
- **border**: The outline around the element.
- **border-radius**: Rounds the corners of the element.
- **vw (viewport width)**: A unit based on the browser window width, allowing the element to resize.
- **absolute**: Allows the element to move freely within its containing box.

Step 6-8:
```css
.line {
  background-color: black;
  width: 50%;
  height: 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 0% 0%;
}
```
- **transform-origin**: A CSS property that defines the point of origin for transformations (like rotation, scaling).

Step 9:
```css
.line:nth-of-type(2) {
  transform: rotate(60deg);
}
```
- **.line:nth-of-type(2)**: Selects the second element in a group of elements of the same type.
- **transform**: A property that applies transformations (like rotation, scaling) to the element.
- **rotate(deg)**: Transforms the element by rotating it a certain angle in degrees.

Step 10:
```css
.line:nth-of-type(3) {
  transform: rotate(120deg);
}

.line:nth-of-type(4) {
  transform: rotate(180deg);
}

.line:nth-of-type(5) {
  transform: rotate(240deg);
}

.line:nth-of-type(6) {
  transform: rotate(300deg);
}
```

Step 11-13:
```css
.cabin {
  background-color: red;
  width: 20%;
  height: 20%;
  position: absolute;
  border: 2px solid;
  transform-origin: 50% 0%;
}
```

Step 14-15:
```css
.cabin:nth-of-type(1) {
  right: -8.5%;
  top: 50%;
}

.cabin:nth-of-type(2) {
  right: 17%;
  top: 93.5%;
}

.cabin:nth-of-type(3) {
  right: 67%;
  top: 93.5%;
}

.cabin:nth-of-type(4) {
  left: -8.5%;
  top: 50%;
}

.cabin:nth-of-type(5) {
  left: 17%;
  top: 7%;
}

.cabin:nth-of-type(6) {
  right: 17%;
  top: 7%;
}
```

Step 16-19:
```css
@keyframes wheel {
   0% {
     transform: rotate(0deg);
   }
  100% {
    transform: rotate(360deg);
  }
}
```
- **@keyframes**: A CSS rule that defines the flow of an animation, allowing you to specify different points during the animation process.
- **Rule name**: You need to assign a name to the @keyframes rule to reference it in other rules.
- **Keyframes**: Use 0%, 100%, or other percentages (like 25%) to define states at specific points in the animation.
- **from and to**: Keywords used to indicate the starting and ending points of the animation sequence.

Step 20:
```css
.wheel {
  border: 2px solid black;
  border-radius: 50%;
  margin-left: 50px;
  position: absolute;
  height: 55vw;
  width: 55vw;
  max-width: 500px;
  max-height: 500px;
  animation-name: wheel;
  animation-duration: 10s; 
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
}
```
- **animation-name: wheel;**: Links the .wheel selector to the @keyframes rule named wheel.
- **animation-duration: 10s;**: Sets the duration of the animation to 10 seconds.
- **animation-iteration-count**: A property that determines how many times the animation will repeat. It can be an integer or infinite for endless repetition.
- **animation-timing-function**: A property that defines how the animation progresses over time.
  + **linear**: The animation progresses at a consistent speed from start to finish.
- **Animation never stops**: Set infinite for animation-iteration-count to keep the animation continuous.

Step 22:
```css
@keyframes cabins {
  0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(-360deg);
   }
}
```

Step 23:
```css
.cabin {
  background-color: red;
  width: 20%;
  height: 20%;
  position: absolute;
  border: 2px solid;
  transform-origin: 50% 0%;
  animation: cabins 10s linear infinite;
}
```
- **animation**: Applies an animation with duration, type, and repetition.
  + **animation: cabins 10s linear infinite;**: Applies the animation named cabins, lasting 10 seconds, with a linear progression and repeating infinitely.

Step 24:
```css
.cabin {
  background-color: red;
  width: 20%;
  height: 20%;
  position: absolute;
  border: 2px solid;
  transform-origin: 50% 0%;
  animation: cabins 10s ease-in-out infinite;
}
```
- To make the cabin animation feel more natural, you can use the `ease-in-out` timing function. This setting indicates that the animation starts and ends at a slower speed, but moves faster in the middle of the cycle.

Step 25-26:
```css
@keyframes cabins {
  0% {
    transform: rotate(0deg);
    background-color: yellow;
  }
  50% {
    background-color: purple;
  }
  100% {
    transform: rotate(-360deg);
  }
}
```

Step 27: remove the background-color from your 0% selector.
```css
@keyframes cabins {
  0% {
    transform: rotate(0deg);
  }
  50% {
    background-color: purple;
  }
  100% {
    transform: rotate(-360deg);
  }
}
```

Step 28-29:
```css
@keyframes cabins {
  0% {
    transform: rotate(0deg);
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: purple;
  }
  75% {
    background-color: yellow;
  }
  100% {
    transform: rotate(-360deg);
  }
}
```