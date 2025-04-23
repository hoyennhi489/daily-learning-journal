**JAVASCRIPT**

**6.2. Truthy vs Falsy**  
- **Truthy**: are values that, when converted to boolean, result in `true`.  
- **Falsy**: are values that, when converted to boolean, result in `false`.  
There are only 7 falsy values in JavaScript:  
```
false  
0  
-0  
0n           // BigInt zero  
""           // empty string  
null  
undefined  
NaN  
```
=> Any other value not listed above is considered **truthy**.  

**Examples of Truthy**:  
```js
"hello"        // non-empty string  
42             // number other than 0  
[]             // empty array  
{}             // empty object  
function() {}  // function  
```

**Examples of Truthy and Falsy**:
```js
let name = "Alice";
if (name) {
  console.log("Valid name!");
} else {
  console.log("Invalid name!");
}
```
- `name = "Alice"` is a non-empty string → truthy  
=> `if (name)` is like `if (true)`  
=> Prints: `"Valid name!"`  

- Conversely:  
```js
let name = "";
```
Empty string is falsy → `if (name)` is like `if (false)`  
=> Prints: `"Invalid name!"`

**`||` Operator – picks the first truthy value**  
```js
let username = "";
let displayName = username || "Anonymous User";
```
- `username = ""` is falsy  
=> `||` skips it and takes `"Anonymous User"` – the next truthy value  
=> `displayName = "Anonymous User"`  

- But if:  
```js
let username = "Trang";
```
=> `"Trang"` is truthy → no need to take the next value after `||`  
=> `displayName = "Trang"`

**`&&` Operator – only executes if the left side is truthy**  
```js
let user = { name: "Linh" };
user && console.log(user.name);
```
- `user` is an object `{}` → always truthy  
→ `&&` allows `console.log(user.name)` to run  
=> Prints `"Linh"`  

- But if:  
```js
let user = null;
```
=> `null` is falsy → `&&` does not allow the right-hand side to run  
=> Prints nothing

**Using `!!` to convert a value to boolean**  
```js
let value = "abc";
console.log(!!value); // true
```
- `!value` = first negation → `false`  
- `!!value` = second negation → `true`  
So `!!` is a way to convert any value to its actual `true/false` boolean equivalent.

**6.3. Logical Operators**  
We have 3 basic logical operators: AND, OR, and NOT  

+ `&&` - AND: Only if both are truthy will it return a truthy result.  
```
#   A       B       A && B  
1   TRUE    TRUE    TRUE  
2   TRUE    FALSE   FALSE  
3   FALSE   TRUE    FALSE  
4   FALSE   FALSE   FALSE  
```

+ `||` - OR: Only if both are falsy will it return a falsy result.  
```
#   A       B       A || B  
1   TRUE    TRUE    TRUE  
2   TRUE    FALSE   TRUE  
3   FALSE   TRUE    TRUE  
4   FALSE   FALSE   FALSE  
```

+ `!` – NOT  
+ `!!` – NOT NOT  
```
A       !A      !!A  
TRUE    FALSE   TRUE  
FALSE   TRUE    FALSE  
```

**6.3. Comparison Operators**  
| Operator | Name             | Meaning                            | Example           | Result |
|----------|------------------|------------------------------------|-------------------|--------|
| ==       | Equal            | Compare values, with type coercion | "5" == 5          | true   |
| ===      | Strict Equal     | Compare value & type               | "5" === 5         | false  |
| !=       | Not Equal        | Compare difference, with coercion  | "5" != 5          | false  |
| !==      | Strict Not Equal | Compare difference, no coercion    | "5" !== 5         | true   |
| >        | Greater than     |                                    | 7 > 5             | true   |
| <        | Less than        |                                    | 3 < 5             | true   |
| >=       | Greater or equal |                                    | 5 >= 5            | true   |
| <=       | Less or equal    |                                    | 3 <= 2            | false  |


**6.3.1. Same-type comparisons**  
**a. Comparing numbers**
- Operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`  
- Numbers are compared like in normal math:
```js
5 === 5       // true  
7 > 3         // true  
10 <= 9       // false  
```

**b. Comparing strings**
- Compared in alphabetical order (Unicode)  
- Compared character by character from left to right:
```js
"apple" < "banana"     // true (a < b)  
"abc" === "abc"        // true  
"Zoo" < "apple"        // true (Z has smaller Unicode than a)  
"2" > "100"            // true (compared as characters: "2" > "1")  
```
🔸 Note: uppercase and lowercase are different ("A" < "a")

**c. Comparing booleans**
- `true = 1`, `false = 0` when coerced  
- But if both are booleans, they are compared directly:
```js
true === true        // true  
true == 1            // true (due to coercion)  
false == 0           // true  
false === 0          // false (different types)  
true > false         // true (1 > 0)  
```

**d. Comparing objects/arrays**
- ❗ Comparing objects or arrays using `==` or `===` compares **references**, not content  
- Two objects in different memory locations are never equal, even with the same content
```js
let a = [1, 2];
let b = [1, 2];

a == b          // false ❌  
a === b         // false ❌  

let c = a;
a === c         // true ✅ (same reference)

let obj1 = { name: "John" };
let obj2 = { name: "John" };

obj1 === obj2   // false ❌ (different memory addresses)
```

**6.3.2. Comparing different types**  
**a. Using `==` → DOES do type coercion**  
JavaScript will try to convert both values to the same type before comparing:
```js
"5" == 5        // true → "5" is coerced to 5  
false == 0      // true → false becomes 0  
true == 1       // true → true becomes 1  
"" == 0         // true → "" becomes 0  
null == undefined // true → special rule  
```

- Note:
  - `null == undefined` is `true`
  - `NaN == NaN` is `false` (because `NaN` is not equal to itself)

**b. Using `===` → NO type coercion**  
```js
"5" === 5       // false → string vs number  
false === 0     // false → boolean vs number  
"" === false    // false → string vs boolean  
null === undefined // false → different types  
```