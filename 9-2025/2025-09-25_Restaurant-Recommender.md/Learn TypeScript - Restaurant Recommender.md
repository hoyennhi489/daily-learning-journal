# 📘 Learn TypeScript - Restaurant Recommender

## Objective

Build a program that recommends restaurants from a given list.
Fix type errors and add a feature to check opening hours.

## Initial Issues

* The program runs but returns incorrect results: `We found 3 restaurants, the first is undefined.`
* Error: `Type 'number' is not assignable to type 'string'`.
* Data in `restaurants.ts` has incorrect types (`string` instead of `number`).
* Wrong property called: `restaurantName` → in the actual object it is only `name`.

## Steps to Fix

1. Fix `priceBracket`, `deliveryTimeMax`, `distance`, `openHour`, `closeHour` → use type `number`.
2. Add `type Restaurant` in `restaurants.ts` to describe the data structure.
3. In `index.ts`:

   * Change `priceBracket: string` → `number`.
   * Fix `deliveryTimeMax` from `'90'` → `90`.
   * Add type `string` for variable `result`.
   * Fix `restaurant.restaurantName` → `restaurant.name`.
   * Add variable `hour = new Date().getHours()` to check opening hours.
   * Add filter condition: only include restaurants that are currently open.
4. Declare `filteredRestaurants: Restaurant[]` to avoid `any`.

## Result

* Successfully compiled with `tsc`.
* Running `node index.js` → returns correct restaurant names.
* No more `undefined`.

Example:
We found 2 restaurants, the first is Silver Rice Sushi 🍣.

## Lessons Learned

* Always ensure type matches between **assigned value** and **type annotation**.
* When encountering `undefined`, check the property names in the object.
* TypeScript detects errors at compile time, not at runtime.
* Declaring a separate type (`Restaurant`) makes the code clearer and easier to maintain.