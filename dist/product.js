"use strict";
// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const products = [
    new Product("Book", 50),
    new Product("Pen", 20),
    new Product("Headphones", 200),
    new Product("Keyboard", 150),
    new Product("Mouse", 80)
];
console.log("Products with price > 100:");
products.filter(p => p.price > 100).forEach(p => console.log(`Name: ${p.name}, price: ${p.price}`));
