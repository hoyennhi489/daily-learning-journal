### **Step 32**  
```javascript
const cart = new ShoppingCart();
```
- Creates a new object from the `ShoppingCart` class. This object will manage the list of items in the cart, calculate totals, taxes, and perform other cart-related actions.  


### **Step 33**  
```javascript
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");
```
- Retrieves all buttons with the class `"add-to-cart-btn"` from the DOM. These are the "Add to Cart" buttons used to add items to the cart.  


### **Step 34-36**  
```javascript
[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
    })
  }
);
```
- Converts the collection of `"add-to-cart-btn"` elements into an array to use the `forEach` method.  
- Adds a `click` event listener to each button:  
  - When a button is clicked, the `cart.addItem()` method is called to add the corresponding item to the cart.  
  - `Number(event.target.id)`: Retrieves the `id` from the clicked button and converts it to a number.  
  - `products`: The list of products used to identify the item to add.  


### **Step 37-40**  
```javascript
cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});
```
- Attaches a `click` event listener to the `cartBtn` button:  
  - `isCartShowing`: A boolean variable to track whether the cart is currently visible.  
  - Updates `showHideCartSpan` to display `"Show"` or `"Hide"`.  
  - Toggles the `display` property of the `cartContainer` between `"block"` (visible) and `"none"` (hidden).  


### **Step 41**  
```javascript
getCounts() {
  return this.items.length;
}
```
- This method returns the total number of items in the cart by counting the elements in the `this.items` array.  


### **Step 42**  
```javascript
[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
    })
  }
);
```
- After adding an item to the cart, updates the total item count in the UI:  
  - `totalNumberOfItems.textContent`: Sets the current item count in the DOM.  


### **Step 43**  
```javascript
calculateTotal() {
  const subTotal = this.items.reduce((total, item) => total + item.price, 0);
}
```
- Calculates the subtotal of all items in the cart:  
  - `this.items.reduce()`: Iterates through each item and sums up their `price` values.  


### **Step 44-47**  
```javascript
calculateTaxes(amount) {
  return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
}
```
- Calculates the tax based on the `taxRate` percentage.  
  - `amount`: The subtotal of the cart.  
  - The tax value is rounded to 2 decimal places.  


### **Step 48-52**  
```javascript
calculateTotal() {
  const subTotal = this.items.reduce((total, item) => total + item.price, 0);
  const tax = this.calculateTaxes(subTotal);
  this.total = subTotal + tax;
  cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
  cartTaxes.textContent = `$${tax.toFixed(2)}`;
  cartTotal.textContent = `$${this.total.toFixed(2)}`;
  return this.total;
}
```
- Completes the `calculateTotal` method:  
  - Calculates the `subTotal` (total before tax).  
  - Calculates `tax`.  
  - Updates `this.total` with the sum of `subTotal` and `tax`.  
  - Updates the UI (`cartSubTotal`, `cartTaxes`, `cartTotal`) with formatted values.  


### **Step 53**  
```javascript
[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);
```
- Updates the totals (subtotal, tax, and total) in real-time whenever an item is added to the cart by calling `cart.calculateTotal()`.  


### **Step 54-59**  
```javascript
clearCart() {
  if (!this.items.length) {
    alert("Your shopping cart is already empty");
    return;
  }

  const isCartCleared = confirm(
    "Are you sure you want to clear all items from your shopping cart?"
  );

  if (isCartCleared) {
    this.items = [];
    this.total = 0;
    productsContainer.innerHTML = "";
    totalNumberOfItems.textContent = 0;
    cartSubTotal.textContent = 0;
    cartTaxes.textContent = 0;
    cartTotal.textContent = 0;
  }
}
```
- The `clearCart` method removes all items from the cart:  
  - If the cart is empty, shows an alert and exits the method.  
  - Prompts the user for confirmation before clearing the cart.  
  - If confirmed, resets `this.items` and `this.total` to empty/zero.  
  - Updates the UI (DOM) to reflect an empty cart.  


### **Step 60**  
```javascript
clearCartBtn.addEventListener('click', cart.clearCart.bind(cart));
```
- Attaches a `click` event listener to the `clearCartBtn`:  
  - When clicked, calls the `clearCart()` method of the `cart` object.  
  - Uses `.bind(cart)` to ensure the context (`this`) inside `clearCart` refers to the `cart` object.  