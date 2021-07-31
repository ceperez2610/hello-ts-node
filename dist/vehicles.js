"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Bike = void 0;
class vehicle {
    constructor(velicity) {
        this.velicity = velicity;
    }
    drive(time) {
        return `Ride ${time * this.velicity}`;
    }
}
class Bike extends vehicle {
}
exports.Bike = Bike;
class Car extends vehicle {
}
exports.Car = Car;
