import products from "./products";
const productName: string = "fanny pack";

const product = products.find((p) => p.name === productName);

if (!product) {
  console.log("Product not found!");
} else {
  console.log("Chosen product:", product);

  if (product.preOrder === true) {
    console.log("We will send you a message when your product is on the way.");
  }

  let shipping: number;
  let taxPercent: number;
  let taxTotal: number;
  let total: number;

  const shippingAddress: string = "123 Broadway, New York, NY";

  if (product.price >= 25) {
    shipping = 0;
    console.log("We provide free shipping for this product.");
  } else {
    shipping = 5;
  }

  if (shippingAddress.includes("New York")) {
    taxPercent = 0.1; // 10%
  } else {
    taxPercent = 0.05; // 5%
  }

  taxTotal = product.price * taxPercent;
  total = product.price + taxTotal + shipping;

  console.log("------ RECEIPT ------");
  console.log("Product:", product.name);
  console.log("Shipping Address:", shippingAddress);
  console.log("Price:", product.price);
  console.log("Tax:", taxTotal);
  console.log("Shipping:", shipping);
  console.log("Total:", total.toFixed(2));
}