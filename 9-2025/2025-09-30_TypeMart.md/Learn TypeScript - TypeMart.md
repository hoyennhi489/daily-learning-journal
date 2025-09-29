# 📘 Learn TypeScript - TypeMart Purchase Flow

## Objective

Build a type-safe purchase flow for TypeMart.  
Ensure correct calculations for price, tax, shipping, and total, while handling pre-order items properly.

## Initial Issues

* Users may select products that are pre-order—need to notify them.  
* Shipping cost and tax must be correctly calculated depending on the product and address.  
* Type errors may occur if variable types are not correctly annotated.  
* Some product properties might be incorrectly referenced (e.g., `.name` vs `.productName`).  

## Steps to Fix / Implement

1. **Import products**  
   Import `products` from `products.ts` into `index.ts`.

2. **Select product by name**  
   * Declare `productName: string` and assign it one of the product names from `products.ts`.  
   * Use a method like `.find()` to locate the product in the array.  
   * Store the result in `product`.

3. **Verify product selection**  
   * Use `console.log(product)` to ensure the correct object is found.  

4. **Handle pre-order items**  
   * If `product.preOrder === true`, log a message notifying the user that we will send a message when the product ships.  
   * Test with `fanny pack` (should notify) and `beanie` (should not notify).

5. **Declare receipt variables**  
   * `shipping: number`, `taxPercent: number`, `taxTotal: number`, `total: number`.  
   * `shippingAddress: string` with a valid address.  

6. **Calculate shipping**  
   * If `product.price >= 25`, set `shipping = 0` and log free shipping message.  
   * Otherwise, `shipping = 5`.  

7. **Calculate taxPercent**  
   * If `shippingAddress` contains 'New York', set `taxPercent = 0.1`.  
   * Otherwise, `taxPercent = 0.05`.

8. **Calculate taxTotal and total**  
   * `taxTotal = product.price * taxPercent`  
   * `total = product.price + taxTotal + shipping`

9. **Print receipt**  
   Use `console.log()` to display:  
   * Product name  
   * Shipping address  
   * Price  
   * Tax total  
   * Shipping  
   * Total  

10. **Verify results**  
    * For example:  
      - 'fanny pack' in New York → total $33.00  
      - 'tote bag' outside New York → total $26.00  

## Result

* Successfully compiled with `tsc`.  
* Correct receipt calculation for any product and address.  
* Pre-order items trigger appropriate notifications.  
* Free shipping and tax logic implemented correctly.  

## Lessons Learned

* Always annotate variable types explicitly in TypeScript.  
* Use `.find()` and correct property names to avoid `undefined`.  
* TypeScript helps catch type errors at compile time.  
* Structuring the purchase flow clearly makes code maintainable and easier to expand.