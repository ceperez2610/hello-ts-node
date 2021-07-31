"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courier = void 0;
const utils_1 = require("./utils");
class Courier {
    deliver(order) {
        return new Promise((resolve, reject) => {
            order.pick = new Date();
            setTimeout(() => {
                order.deliver = new Date();
                resolve(order);
            }, utils_1.getRandomTime(1000, 2500));
        });
    }
}
exports.Courier = Courier;
