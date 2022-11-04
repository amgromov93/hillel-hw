'use strict'

function Hamburger(size) {
    this.price = size.price;
    this.callories = size.callories;
}

Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}

Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30,
}

Hamburger.SIZE_LARGE = {
    price: 100,
    callories: 40,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20,
}

Hamburger.TOPPING_SALAT = {
    price: 20,
    callories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10,
}

Hamburger.TOPPING_SPICES = {
    price: 15,
    callories: 0,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
}

Hamburger.prototype.addTopping = function(topping) {
    this.price += topping.price;
    this.callories += topping.callories;
}

Hamburger.prototype.getPrice = function() {
    return this.price;
}

Hamburger.prototype.getCallories = function() {
    return this.callories;
}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);


hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_SALAT);
hamburger.addTopping(Hamburger.TOPPING_SALAT);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());