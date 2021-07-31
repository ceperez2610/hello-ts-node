"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurant_1 = require("./Restaurant");
class Application {
    constructor() { }
    static start() {
        const myRestaurant = new Restaurant_1.Restaurant();
        myRestaurant.start(15);
    }
}
Application.start();
