### 6. Types & Shape of Objects

TypeScript not only knows data types (string, number, boolean…) but also their **shape**:
• Which properties exist.
• Which methods can be called.

Correct examples:

```ts
"OH".length;         // 2
"MY".toLowerCase();  // "my"
```

⇒ Because string already has `.length` and `.toLowerCase()`.

Incorrect example:

```ts
"MY".toLowercase();  
// ❌ Error: Property 'toLowercase' does not exist on type '"MY"'.
// Did you mean 'toLowerCase'?
```

⇒ TypeScript helps detect typos (because it understands the shape of string).

**Exercise: Fix the error in `index.ts`**

* Original code (with errors):

```ts
let name = "Muriel!";
console.log(name.tolowercase());  // ❌ wrong method name
console.log(name.Length);         // ❌ capitalized property
```

When running `node index.js`, it will throw an error instead of showing the expected result:

```
"MURIEL!"
7
```

* Corrected code:

```ts
let name = "Muriel!";
console.log(name.toUpperCase());  // ✅ uppercase all → "MURIEL!"
console.log(name.length);         // ✅ count characters → 7
```

* Check procedure:

- Recompile:

```
tsc index.ts
```

* Run the code:

```
node index.js
```

**Remember:**
• TypeScript knows exactly which properties/methods exist on a type.
• Typos or wrong calls → TS throws an error immediately.
• Helps avoid “silly” mistakes common in plain JavaScript.

### 7. The `any` type in TypeScript

* When declaring a variable without an initial value, TypeScript cannot infer its type.
* In this case, the variable is assigned a special type: `any`.
* With `any`, the variable can accept any type (number, string, boolean, …) without errors.

Example (no error because `onOrOff` is `any`):

```ts
let onOrOff;   // variable without initializer → TS treats as any

onOrOff = 1;      // number ✅
onOrOff = false;  // boolean ✅
```

**Exercise:**
Requirements:

1. Declare a variable `guess` without an initial value.
2. Assign a string to `guess` (e.g., `"blue"`).
3. Reassign a number to `guess` (e.g., `7`).
4. Run `tsc` to check → TypeScript will not throw errors.

```ts
let guess;          // guess has type any

guess = "blue";     // string ✅
guess = 7;          // number ✅

console.log(guess); // outputs 7
```

**Conclusion:**
• `any` = “free” to assign any type.
• But in practice, avoid using `any` to prevent hard-to-find bugs.


### 8. Type Annotations

* If a variable is declared without an initial value, TS treats it as `any` by default.
* To avoid errors, we can **annotate the type** of the variable.
* Syntax:

```ts
let variableName: type;
```

Example:

```ts
let mustBeAString: string;
mustBeAString = 'Catdog'; // ✅ valid
mustBeAString = 1337;     // ❌ error: number cannot be assigned to string
```

⇒ When compiled to JavaScript, type annotations disappear, so they don’t affect the JS code.

**Exercise:**

1. Declare a variable `phoneNumber` with type annotation `string`.
2. Run `tsc` to check for type errors.
3. Fix the error as suggested by TypeScript.

```ts
let phoneNumber: string;

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323';
}

// 1. Declare variable with type annotation
let phoneNumber: string;

// 2. Assign valid value
phoneNumber = "+84-123-456-789"; // ✅ string

// 3. If mistakenly assigned a wrong type
phoneNumber = 12345; // ❌ error: number cannot be assigned to string
```

**Conclusion:**
• `any`: allows assigning any value → higher risk of errors.
• `type annotation`: fixes the variable’s type → safer.
• After compilation → only plain JavaScript remains.

### TypeScript Review – Lesson 1

• TypeScript = JavaScript + Type System.
• Type system: TS knows what type a variable holds and checks during execution.
• Type inference: if declared with an initial value → TS infers the type automatically.
• Object shape: TS knows which properties/methods an object has.
• `any`: when type inference is not possible → variable defaults to `any`.
• Type annotation: explicitly declare the variable’s type.

**What are the benefits of TypeScript?**
⇒ TypeScript adds types to JavaScript to detect potential errors, clarify structure, and help refactor code.

**What happens after running `tsc main.ts`?**
⇒ The TypeScript compiler reads `main.ts` and generates a new `main.js` file, which is used to execute the code.

**Which file extensions are valid for TypeScript?**
⇒ `.ts` or `.tsx`

Example:

```ts
// Type annotation
let youAreAwesome: boolean;
youAreAwesome = true;    // ✅ correct
youAreAwesome = "yes";   // ❌ wrong: string cannot be assigned to boolean
```

**Conclusion:**
• Use type inference for variables with initial values.
• Use type annotation when you want explicit typing.
• Limit usage of `any` as it may cause bugs.

### 9. The `tsconfig.json` file in TypeScript

* `tsconfig.json` is the configuration file for TypeScript.
* Placed at the root of the project.
* Helps customize compilation rules, specify which files to compile.

**Benefits:**

* More strict or flexible control when writing code.
* Used in both personal and team projects to unify rules.

**Sample `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strictNullChecks": true
  },
  "include": ["**/*.ts"]
}
```

**Explanation:**

* `compilerOptions`: contains compilation rules.
  • `"target": "es2017"` → output code follows ECMAScript 2017.
  • `"module": "commonjs"` → use CommonJS module syntax (Node.js).
  • `"strictNullChecks": true` → variable can only be assigned `null` or `undefined` if explicitly declared.

* `include`: specifies which files to compile.
  • `["**/*.ts"]` → all `.ts` files in the project.

**Usage:**

* With `tsconfig.json`, just run:

```
tsc
```

→ The compiler will automatically read the config and compile all `.ts` files in the project.

* To compile a specific file:

```
tsc fileName.ts
```

**Conclusion:**
• `tsconfig.json` helps manage TypeScript projects more professionally.
• Can be customized as strict or relaxed as needed.
• Very useful when working in teams.