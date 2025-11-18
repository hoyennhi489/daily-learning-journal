# Creating Classes and Inheritance in JavaScript

## 1. Basic Concepts of Class

* JavaScript uses a prototype-based mechanism, but the `class` syntax makes the code more readable.
* A class is a blueprint for creating multiple objects.
* Use `new ClassName()` to create an object.

## 2. Structure of a Class

### Declaring a Class

```javascript
class Train {}
```

### Constructor (Initialization Function)

* Automatically runs when an object is created.
* Used to assign initial values.

Example:

```javascript
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}
```

`this` represents the newly created object.

## 3. Creating Objects from a Class

```javascript
var myTrain = new Train('red', false);
console.log(myTrain); 
// Train {color: 'red', lightsOn: false}
```

## 4. Adding Methods to a Class

Methods are on the prototype and shared among all objects.

```javascript
toggleLights() { this.lightsOn = !this.lightsOn; }

lightsStatus() { console.log('Lights on?', this.lightsOn); }

getSelf() { console.log(this); }

getPrototype() { console.log(Object.getPrototypeOf(this)); }
```

Usage:

```javascript
train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();
```

## 5. Inheritance

Use the `extends` keyword:

```javascript
class HighSpeedTrain extends Train {}
```

### Constructor of a Subclass

* Use `super()` to call the parent class constructor.
* Initialize parent class properties + add new properties.

Example:

```javascript
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```

## 6. Adding Methods to a Subclass

```javascript
toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
}
```

## 7. Overriding Methods

A subclass can override parent methods and still use the original logic via `super`.

Example of overriding `toggleLights()`:

```javascript
toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
}
```

## 8. Checking the Prototype

```javascript
train5.getPrototype();
highSpeed1.getPrototype();
```

The prototype of the subclass points to the parent class prototype, forming the inheritance chain.

## 9. Using a Class Object as a Property of Another Class

Example with three classes: `StationaryBike`, `Treadmill`, `Gym`

```javascript
class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position;
        this.modes = modes;
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs;
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}
```

Result:

* `openHrs`: opening hours
* `stationaryBike`: object of `StationaryBike` class
* `treadmill`: object of `Treadmill` class

### Quick Summary

* `class` is for creating blueprints.
* `constructor()` initializes properties.
* Methods are on the prototype.
* `extends` is for inheriting another class.
* `super()` calls parent constructor/method.
* Subclasses can add or override methods.
* You can use objects of one class as properties in another class.

---

# Default Parameters in JavaScript

## 1. What are Default Parameters?

* An ES6 feature allowing default values for function parameters in the declaration.
* If a function is called without arguments, the parameter uses the default value.
* Helps prevent `undefined` errors and makes code safer and more predictable.

## 2. Example Without Default Parameters

```javascript
function noDefaultParams(number) {
    console.log('Result:', number * number);
}

noDefaultParams();  // Result: NaN
```

Explanation:

* No argument → `number = undefined`
* `undefined * undefined` → `NaN`

## 3. Using Default Parameters

```javascript
function withDefaultParams(number = 10) {
    console.log('Result:', number * number);
}

withDefaultParams();   // Result: 100
withDefaultParams(5);  // Result: 25
```

Benefits:

* Function runs even if no argument is passed.
* Still flexible with custom values.

## 4. Applying to Classes

Without default parameters:

```javascript
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }

    calculate() {
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
        } else {
            console.log('The value of bool1 is incorrect');
        }
    }
}

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate();  
// 'The value of bool1 is incorrect'
```

Forgetting arguments can cause logical errors.

## 5. Improving with Default Parameters

```javascript
class WithDefaultParams {
    constructor(
        num1 = 1,
        num2 = 2,
        num3 = 3,
        string1 = "Result:",
        bool1 = true
    ) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }

    calculate() {
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
        } else {
            console.log("The value of bool1 is incorrect");
        }
    }
}
```

Benefits:

* No need to pass all arguments when creating objects.
* Easier for testing or quick object creation.
* Code is safer and easier to understand.

## 6. Default Parameters and Inheritance

In a subclass, you can:

* Pass only the parameters specific to the subclass.
* Use defaults from the parent constructor for the rest.

This makes the inheritance structure simpler, without passing too many parameters.

## 7. Summary

a. Default parameters allow setting values directly in the function declaration.
b. Prevent `undefined` errors and improve stability.
c. Useful for:

* Creating objects without passing many arguments.
* Building class inheritance systems.
d. In classes:
* Constructors can contain default values for each property.
* Subclasses can override only what is necessary.

---

# Designing an OOP Program in JavaScript

In this lesson, we will build an object-oriented system in JavaScript using **classes**, **inheritance**, and two important keywords:

* `extends` – to create a subclass that inherits from a parent class
* `super` – to call the constructor or methods of the parent class

The inheritance hierarchy looks like this:

```
Animal
 ├── Cat
 │     ├── HouseCat
 │     └── Tiger
 └── Bird
       └── Parrot
```

---

## 1. Designing the `Animal` Class (Base Class)

First, we consider what the parent class `Animal` needs to have.

All animals have:

* `color`
* `energy`

All animals share common behaviors:

* `isActive()` – decreases energy
* `sleep()` – restores energy
* `getColor()` – prints the color to the console

**Animal class code:**

```javascript
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }

    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy);
        } else {
            this.sleep();
        }
    }

    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy);
    }

    getColor() {
        console.log(this.color);
    }
}
```

---

## 2. `Cat` Class Inheriting from `Animal`

The `Cat` class adds its own properties:

* `sound`
* `canJumpHigh`
* `canClimbTrees`

And has its own method:

* `makeSound()`

```javascript
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound() {
        console.log(this.sound);
    }
}
```

---

## 3. `Bird` Class Inheriting from `Animal`

The `Bird` class adds:

* `sound`
* `canFly`

```javascript
class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    makeSound() {
        console.log(this.sound);
    }
}
```

---

## 4. `HouseCat` Class Inheriting from `Cat`

`HouseCat` adds:

* `houseCatSound`

It overrides `makeSound(option)` as follows:

* If `option === true`, it calls the parent cat sound with `super.makeSound()`
* Then it plays its own sound

```javascript
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }

    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
```

---

## 5. `Tiger` Class Inheriting from `Cat`

`Tiger` adds:

* `tigerSound`

Works similarly to `HouseCat`:

```javascript
class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }

    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
```

---

## 6. `Parrot` Class Inheriting from `Bird`

`Parrot` adds:

* `canTalk`

Its `makeSound(option)` method:

* Always prints the bird’s `chirp` sound
* If `option === true` **and** `this.canTalk === true`, it also says a special sentence

```javascript
class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }

    makeSound(option) {
        console.log(this.sound);

        if (option && this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
```

---

## 7. Creating Objects and Testing

### Parrots

```javascript
var polly = new Parrot(true);
var fiji = new Parrot(false);

polly.makeSound(true);  // chirp, I'm a talking parrot!
fiji.makeSound(true);   // chirp
```

### House Cat

```javascript
var leo = new HouseCat();

leo.makeSound(false); // meow
leo.makeSound(true);  // purr, meow
```

### Tiger

```javascript
var cuddles = new Tiger();

cuddles.makeSound(false); // Roar!
cuddles.makeSound(true);  // purr, Roar!
```

---

# Loops and Objects (`for...of`, `for...in`, `Object.keys/values/entries`)

## 1. Why `for...of` cannot iterate over objects

Objects are **not iterable**, so `for...of` cannot be used directly on them.

Example:

```javascript
const car = { speed: 100, color: "blue" };

for (prop of car) {
    console.log(prop);
}
// Uncaught TypeError: car is not iterable
```

## 2. `for...of` works on arrays

```javascript
const colors = ['red','orange','yellow'];
for (const color of colors) {
    console.log(color);
}
```

Output:

```
red
orange
yellow
```

`for...of` iterates over the **values** of iterable objects like arrays, strings, sets, maps.

## 3. Using `for...of` with objects

Convert the object into an array first:

* `Object.keys(obj)` → array of keys
* `Object.values(obj)` → array of values
* `Object.entries(obj)` → array of `[key, value]` pairs

Examples:

```javascript
const car2 = { speed: 200, color: "red" };
Object.keys(car2); // ['speed','color']

const car3 = { speed: 300, color: "yellow" };
Object.values(car3); // [300, 'yellow']

const car4 = { speed: 400, color: 'magenta' };
Object.entries(car4); 
// [['speed', 400], ['color', 'magenta']]
```

## 4. Iterating over an object with `for...of`

```javascript
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
};

for (const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key]);
}
```

* Access dynamic properties using bracket notation: `clothingItem[key]`.

## 5. Dynamic Property Access

```javascript
function testBracketsDynamicAccess() {
  var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

  var drone = { speed: 15, color: "orange" };

  console.log(drone[dynamicKey]);
}
```

* Sometimes outputs `15`, sometimes `"orange"`, depending on `dynamicKey`.

## 6. `for...in` – iterates keys

```javascript
const car = { speed: 100, color: "blue" };

for (const key in car) {
    console.log(key);
}
// speed
// color
```

**Difference:**

* `for...of` → iterates values
* `for...in` → iterates keys

## 7. Summary

| Loop / Method      | What it iterates      | Works on                           |
| ------------------ | --------------------- | ---------------------------------- |
| `for...of`         | value                 | iterable (array, string, map, set) |
| `for...in`         | key                   | object keys or array indices       |
| `Object.keys()`    | array of keys         | object                             |
| `Object.values()`  | array of values       | object                             |
| `Object.entries()` | array of [key, value] | object                             |

---

# Template Literals in JavaScript

## 1. What are Template Literals?

* Introduced in ES6 as an improved way to create strings (`'...'` or `"..."`).
* Use backticks `` ` `` to define a string:

```javascript
`Hello, World!`
```

* Backticks are usually on the key left of `1` (below TAB).

## 2. Variable Interpolation

```javascript
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`); // Hello World!
```

* In ES5, you’d need:

```javascript
console.log(greet + " " + place + "!"); // Hello World!
```

## 3. Multi-line Strings

```javascript
`Hello,
World
!`
```

* Standard `'...'` or `"..."` strings do not allow direct line breaks.

## 4. Expression Evaluation

```javascript
console.log(`${1 + 1 + 1 + 1 + 1} stars!`); // 5 stars!
```

* Can include complex expressions or function calls.

## 5. Summary of Advantages

* Direct variable interpolation
* Multi-line strings
* Evaluate JavaScript expressions within `${}`
* Supports nested templates and tagged templates

---

# Data Structures in JavaScript

## 1. Example Problem

* Calculate the average score of students.
* Consider:

  1. How to store the data
  2. How to solve the problem based on that data

## 2. Data Representation

* String: `"5,7,8,6"` → need to parse
* Separate variables: `grade1 = 5` … → hard to manage
* Array (recommended): `let grades = [5, 7, 8, 6];`

  * Groups related data
  * Easy to calculate and iterate
  * Clean and maintainable

## 3. Common Data Structures

* **Object:** key-value pairs

```javascript
let student = { name: "Alice", grade: 8 };
console.log(student.name); // Alice
```

* **Array:** ordered collection, iterable

```javascript
let grades = [5, 7, 8, 6];
let sum = 0;
for (let grade of grades) sum += grade;
console.log(sum / grades.length); // 6.5
```

* **Map:** iterable, keys can be any type

```javascript
let map = new Map();
map.set("Alice", 8);
map.set(1, "One");
console.log(map.get("Alice")); // 8
```

* **Set:** unique values only

```javascript
let numbers = new Set([1, 2, 2, 3]);
console.log(numbers); // Set {1, 2, 3}
```

## 4. Conclusion

* Choosing the right data structure is key.
* JavaScript commonly uses objects, arrays, maps, and sets.

---

# Spread Operator in JavaScript (ES6)

## 1. What is Spread Operator?

* Syntax: `...`
* Multi-purpose:

  1. Expand array elements
  2. Copy or merge object properties

## 2. Example with Arrays

```javascript
let top3 = ['Colosseum', 'Trevi Fountain', 'Vatican City'];
function showItinerary(place1, place2, place3) {
    console.log(`Visit ${place1}`);
    console.log(`Visit ${place2}`);
    console.log(`Finish with a visit to ${place3}`);
}
```

* Traditional call: `showItinerary(top3[0], top3[1], top3[2]);`
* Using spread: `showItinerary(...top3);` → cleaner

### Array with 7 elements

```javascript
let top7 = ['Place1','Place2','Place3','Place4','Place5','Place6','Place7'];
showItinerary(...top7);
```

## 3. Example with Objects

```javascript
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3};
console.log(obj2); // {a: 1, b: 2, c: 3}
```

## 4. Summary

* Expands array into individual elements
* Copies or merges objects quickly
* Makes code shorter, clearer, and easier to maintain

---

# Rest Operator in JavaScript (ES6)

## 1. Concept

* Syntax: `...` (three dots), similar to the Spread operator but opposite in use.
* **Spread Operator:** expands elements from a "box" (array/object).
* **Rest Operator:** collects remaining elements into a new "small box" (array).

---

## 2. Example with Array and Destructuring

Suppose you have 7 tourist spots in Rome:

```javascript
const top7 = [
  "Colosseum",
  "Roman Forum",
  "Vatican",
  "Trevi Fountain",
  "Pantheon",
  "Piazza Venezia",
  "Palatine Hill"
];

// Extract top 3 and collect the rest
const [first, second, third, ...secondVisit] = top7;

console.log(first);       // "Colosseum"
console.log(second);      // "Roman Forum"
console.log(third);       // "Vatican"
console.log(secondVisit); // ["Trevi Fountain", "Pantheon", "Piazza Venezia", "Palatine Hill"]
```

* `first, second, third` → first 3 elements
* `...secondVisit` → collects remaining elements into a new array

---

## 3. Example with Functions (Rest Parameter)

Useful for functions with unknown number of arguments:

```javascript
function addTaxToPrices(taxRate, ...prices) {
  return prices.map(price => price * (1 + taxRate));
}

console.log(addTaxToPrices(0.1, 10, 20, 30)); // [11, 22, 33]
```

* Rest parameter (`...prices`) **must be the last parameter**
* Collects all remaining arguments into an array

---

## 4. Spread vs Rest Comparison

| Feature        | Spread (`...array`)                  | Rest (`...array`)                                        |
| -------------- | ------------------------------------ | -------------------------------------------------------- |
| Purpose        | Expands elements of array/object     | Collects elements into a new array                       |
| Usage Location | Calling functions or merging objects | Variable declaration, destructuring, function definition |
| Example        | `showItinerary(...top3)`             | `const [first, ...rest] = top7`                          |

---

## 5. Summary

* **Spread:** unpacks elements
* **Rest:** packs remaining elements into an array
* Makes code concise and flexible when working with arrays, objects, and functions

---

# Spread and Rest Operator: Examples

### 1. Spread Operator `(...)`

* Expands arrays, objects, or strings into individual elements or properties

**Example 1: Merge arrays**

```javascript
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];

const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);
// ['apple', 'pear', 'plum', 'blueberry', 'strawberry']
```

**Example 2: Merge objects**

```javascript
const flying = { wings: 2 };
const car = { wheels: 4 };

const flyingCar = { ...flying, ...car };
console.log(flyingCar);
// { wings: 2, wheels: 4 }
```

**Example 3: Add to array without push**

```javascript
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
// ['onion', 'parsley', 'carrot', 'beetroot']
```

**Example 4: Convert string to array**

```javascript
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);
// ['H', 'e', 'l', 'l', 'o']
```

**Example 5: Copy objects/arrays (shallow copy)**

```javascript
const car1 = { speed: 200, color: 'yellow' };
const car2 = { ...car1 };
car1.speed = 201;
console.log(car1.speed, car2.speed); // 201, 200

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);
// ['apples'] 'not' ['apples','pears']
```

---

### 2. Rest Operator `(...)`

* Collects remaining elements into an array or object
* Used in destructuring or function arguments

**Example 1: Destructuring**

```javascript
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

**Example 2: Function arguments**

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```

* Rest parameter **must be last** in function parameter list

---

### 3. Spread vs Rest Summary

| Feature        | Spread (`...`)                | Rest (`...`)                                |
| -------------- | ----------------------------- | ------------------------------------------- |
| Purpose        | Expand array/object/string    | Collect elements into array/object          |
| Usage Location | Function call or merge object | Variable declaration or function definition |
| Example        | `showItinerary(...top3)`      | `const [first, ...rest] = top7`             |

---

# JavaScript Modules (ES6)

## 1. Module Concept

* A module is a **reusable, independent unit of code** in JavaScript
* Advantages:

  * Can add, remove, or replace modules without affecting the program
  * Organizes code clearly, avoids variable/function name conflicts

**Before modules:**

* All functions defined globally (`window` object) → name collisions
* Some workarounds existed but were imperfect
* JS had no native module system before ES6

---

## 2. Module History

* **CommonJS:** for Node.js (server-side)

  * Syntax: `require`, `module.exports`
  * Limitation: browser cannot interpret directly
* **ES6 Modules:** natively supported in browsers

---

## 3. Using `<script>` in HTML

```html
<script type="text/javascript">
  console.log("Hello from script tag");
</script>
```

* Default type is `text/javascript`
* Open console to see output

---

## 4. ES6 Modules in Browser

* Use `type="module"`:

```html
<script type="module" src="greeting.js"></script>
```

* Module syntax:

```javascript
// export
export function func() { ... }

// import
import { func } from './module.js';
```

* **Security note:** Browser blocks local files due to CORS

  * Solution: run via local server (e.g., Live Server, Node.js server)

---

## 5. Summary

* ES6 modules: reusable, conflict-free code
* Browser usage requires:

  1. `<script type="module">`
  2. Serve via a server, not direct file opening
* ES6 modules are now the standard for JS code management