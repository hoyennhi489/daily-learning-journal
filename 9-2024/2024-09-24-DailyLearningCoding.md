
Step 41: Change `one` -> `red`.
```html
<div class="marker red">
</div>
```

Step 42:
```css
.red {
  background-color: rgb(0, 0, 0);
}
```

Step 43:
```css
.red {
  background-color: rgb(255, 0, 0);
}
```

Step 44:
```html
<div class="marker green">
</div>
<div class="marker blue">
</div>
```

Step 45:
```css
.green {
  background-color: rgb(0, 0, 0);
}

.blue {
  background-color: rgb(0, 0, 0);
}
```

Step 46:
> A very common way to apply color to an element with CSS is to use hex color values.

> Hex Value: Used to specify colors in CSS.
Structure: #RRGGBB (RR: red, GG: green, BB: blue).

```css
.green {
  background-color: #00FF00;
}
```

Step 47:
- Base 10 (Decimal): Values from 0 - 9.
- Base 16 (Hexadecimal): Values from 0 - 9 and A - F.
- Color value: 00 is 0%, FF is 100%.

Example code:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

Lower the intensity of green by setting the green value of the hex color to 7F.
```css
.green {
  background-color: #007F00;
}
```

Step 48:
> HSL color model: Includes hue, saturation, and lightness.

> HSL function: Takes 3 values:
- Hue: 0 to 360 (degrees).
- Saturation: 0% to 100%.
- Lightness: 0% to 100%.
*Blue color: Use hsl(240, 100%, 50%).*
```css
.blue {
  background-color: hsl(240, 100%, 50%);
}
```

Step 49:
> linear-gradient function: Controls the direction of the transition and colors.
```css
.red {
  background: rgb(255, 0, 0);
}
```

Step 50:
> Syntax for linear-gradient: linear-gradient(direction, color1, color2, ...).

> gradientDirection: Direction of the transition.

> color1 and color2: The colors involved in the gradient.
```css
.red {
  background: linear-gradient(90deg);
}
```

Step 51:
```css
.red {
  background: linear-gradient(90deg, rgb(255, 0, 0));
}
```

Step 52:
> Gradient needs two colors: The linear-gradient function requires at least two color parameters.
```css
.red {
  background: linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 255, 0));
}
```

Step 53:
> More colors can be added: The linear-gradient function can take multiple color parameters.
```css
.red {
  background: linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 255, 0), rgb(0, 0, 255));
}
```

Step 54:
> Color stops: Adjust the position of colors on the gradient.

> Length units: Can be in px or percentages.

> Example gradient: linear-gradient(90deg, red 90%, black).
```css
.red {
  background: linear-gradient(90deg, rgb(255, 0, 0) 75%, rgb(0, 255, 0), rgb(0, 0, 255));
}
```

Step 55:
```css
.red {
  background: linear-gradient(180deg, rgb(255, 0, 0) 75%, rgb(0, 255, 0), rgb(0, 0, 255));
}
```

Step 56:
```css
.red {
  background: linear-gradient(180deg, rgb(255, 0, 0) 0%, rgb(0, 255, 0) 50%, rgb(0, 0, 255) 100%);
}
```

Step 57:
```css
.red {
  background: linear-gradient(180deg, rgb(122, 74, 14) 0%, rgb(0, 255, 0) 50%, rgb(0, 0, 255) 100%);
}
```

Step 58:
```css
.red {
  background: linear-gradient(180deg, rgb(122, 74, 14) 0%, rgb(245, 62, 113) 50%, rgb(0, 0, 255) 100%);
}
```

Step 59:
```css
.red {
  background: linear-gradient(180deg, rgb(122, 74, 14) 0%, rgb(245, 62, 113) 50%, rgb(162, 27, 27) 100%);
}
```

Step 60:
```css
.green {
  background: #007F00;
}
```

Step 61:
```css
.green {
  background: linear-gradient(180deg, #55680D);
}
```

Step 62:
```css
.green {
  background: linear-gradient(180deg, #55680D, #71F53E);
}
```

Step 63:
```css
.green {
  background: linear-gradient(180deg, #55680D, #71F53E, #116C31);
}
```

Step 64: Clean up the code: Remove three color stops in the .red rule.
```css
.red {
  background: linear-gradient(180deg, rgb(122, 74, 14), rgb(245, 62, 113), rgb(162, 27, 27));
}
```

Step 65:
Clean up the code: Remove the gradientDirection parameter from both linear-gradient functions.
```css
.red {
  background: linear-gradient(rgb(122, 74, 14), rgb(245, 62, 113), rgb(162, 27, 27));
}

.green {
  background: linear-gradient(#55680D, #71F53E, #116C31);
}
```

Step 66:
```css
.blue {
  background: hsl(240, 100%, 50%);
}
```

Step 67:
```css
.blue {
  background: linear-gradient(hsl(186, 76%, 16%));
}
```

Step 68:
```css
.blue {
  background: linear-gradient(hsl(186, 76%, 16%), hsl(223, 90%, 60%));
}
```

Step 69:
```css
.blue {
  background: linear-gradient(hsl(186, 76%, 16%), hsl(223, 90%, 60%), hsl(240, 56%, 42%));
}
```

Step 70:
```html
<div class="sleeve"></div>
```

Step 71:
```css
.sleeve {
  width: 110px;
  height: 25px;
}
```

Step 72:
```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: white;
}
```

Step 73:
> The Opacity property describes the degree of opacity or transparency of an object.

> 0 (or 0%) is completely transparent; 1 (or 100%) is completely opaque.
```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: white;
  opacity: 0.5;
}
```

Step 74:
```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: white;
}
```

Step 75:
> The rgba function in CSS is used to set colors with an alpha channel for transparency, including values for red, green, blue, and alpha (from 0 to 1.0).
```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
}
```

Step 76:
```html
<div class="marker red">
  <div class="cap"></div>
  <div class="sleeve"></div>
</div>
```

Step 77:
```css
.cap {
  width: 60px;
  height: 25px;
}
```

Step 78:
> The default display property of div elements is block, causing them to stack on top of each other.
```css
.cap, .sleeve {
  display: inline-block;
}
```

Step 79:
> Borders in CSS are the lines surrounding HTML elements.
```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  border-left-width: 10px;
}
```

Step 80:
```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  border-left-width: 10px;
  border-left-style: solid;
}
```