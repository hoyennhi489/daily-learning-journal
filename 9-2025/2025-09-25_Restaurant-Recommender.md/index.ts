import restaurants, { Restaurant } from './restaurants';

const dollarSigns = '$$';
const priceBracket: number = dollarSigns.length;   // was string -> fixed to number
const deliveryTimeMax: number = 90;                // was "90" (string) -> fixed to number
const maxDistance: number = 10;

// Current hour (UTC 24h)
const hour: number = new Date().getHours();

// Final result
let result: string;   // was 'any' -> fixed to string

// Filter restaurant list
const filteredRestaurants: Restaurant[] = restaurants.filter((restaurant) => {
  if (restaurant.priceBracket > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (restaurant.distance > maxDistance) {
    return false;
  }

  // Check if the restaurant is open
  if (hour < restaurant.openHour || hour > restaurant.closeHour) {
    return false;
  }

  return true;
});

// Output result
if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  // was restaurantName -> fixed to name
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);