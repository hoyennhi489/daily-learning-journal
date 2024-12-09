### **Learn Basic OOP by Building a Shopping Cart.**

### **Step 1: Initialize DOM References**

```javascript
// Reference HTML elements to interact with the cart and products
const cartContainer = document.getElementById("cart-container"); // Section displaying the shopping cart
const productsContainer = document.getElementById("products-container"); // Section displaying products in the cart
const dessertCards = document.getElementById("dessert-card-container"); // Section displaying products for user selection
```

---

### **Step 2: Reference Control Buttons**

```javascript
// Access buttons for performing actions in the UI
const cartBtn = document.getElementById("cart-btn"); // Button to show/hide the cart
const clearCartBtn = document.getElementById("clear-cart-btn"); // Button to clear all items in the cart
```

---

### **Step 3: Reference Elements Showing Summary Information**

```javascript
// Retrieve the displayed values for total items, cart subtotal, taxes, and total
const totalNumberOfItems = document.getElementById('total-items').textContent; // Total number of items in the cart
const cartSubTotal = document.getElementById('subtotal').textContent; // Cart subtotal (before tax)
const cartTaxes = document.getElementById('taxes').textContent; // Taxes (calculated based on tax rate)
const cartTotal = document.getElementById('total').textContent; // Total amount (including tax)
```

---

### **Step 4: Show/Hide Cart**

```javascript
// Track the cart display status
const showHideCartSpan = document.getElementById("show-hide-cart"); // Section to display cart status
let isCartShowing = false; // Boolean to track if the cart is shown or hidden (default is hidden)
```

---

### **Step 5-7: Products Array**

```javascript
// Array of products with information such as id, name, price, and category
const products = [
  { id: 1, name: "Vanilla Cupcakes (6 Pack)", price: 12.99, category: "Cupcake" },
  { id: 2, name: "French Macaron", price: 3.99, category: "Macaron" },
  { id: 3, name: "Pumpkin Cupcake", price: 3.99, category: "Cupcake" },
  // ... Remaining products
];
/*
- id: Unique identifier for each product.
- name: Name of the product.
- price: Price of the product (decimal number).
- category: Product category (e.g., Cupcake, Macaron, Pretzel, Ice Cream).
*/
```

---

### **Step 8: Using `forEach`**

```javascript
// Use .forEach to iterate over the product array
products.forEach(
  () => {}
);
/*
- .forEach: A method to loop through each element in an array.
- The callback function is executed for each array element.
*/
```

---

### **Step 9-13: Display the Product List**

```javascript
// Iterate through each product to display them in the UI
products.forEach(
  ({ name, id, price, category }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2> <!-- Display product name -->
        <p class="dessert-price">$${price}</p> <!-- Display product price -->
        <p class="product-category">Category: ${category}</p> <!-- Display product category -->
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart <!-- Button to add the product to the cart -->
        </button>
      </div>
    `;
  }
);
/*
- For each product in the array, an HTML snippet is appended to the 'dessertCards' section.
- Includes product name, price, category, and a button for adding to the cart.
*/
```

---

### **Step 14-31: `ShoppingCart` Class**

```javascript
class ShoppingCart {
  constructor() {
    this.items = []; // Stores the list of added products
    this.total = 0; // Total value of the cart
    this.taxRate = 8.25; // Tax rate (8.25%)
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id); // Find the product by id
    const { name, price } = product; // Extract the name and price of the product
    this.items.push(product); // Add the product to the 'items' array

    // Count the quantity of each product
    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    });

    const currentProductCount = totalCountPerProduct[product.id]; // Current count of the added product
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`); // Section showing the quantity

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x` // If the product is already in the cart, update the count
      : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `; // If the product is not in the cart, add it as a new item in the UI
  }
}
/*
- The 'ShoppingCart' class manages the cart: adding products, calculating totals, tax, and updating the UI.
- The 'addItem' method: Handles adding a product, tracking quantities, and updating the UI.
*/
```