"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const Courier_1 = require("./Courier");
const utils_1 = require("./utils");
class Restaurant {
    prepareOrder(orderNumber) {
        const task = new Promise((resolve, reject) => {
            console.log(`[>] New order requested ${orderNumber}`);
            const newOrder = {
                number: orderNumber,
                cookStart: new Date(),
            };
            setTimeout(() => {
                newOrder.cookFinish = new Date();
                resolve(newOrder);
            }, utils_1.getRandomTime(1500, 2500));
        });
        return task;
    }
    start(limit) {
        let count = 1;
        while (count <= limit) {
            this.prepareOrder(count)
                .then((order) => {
                const courier = new Courier_1.Courier();
                courier.deliver(order);
                return courier.deliver(order);
            })
                .then((order) => {
                utils_1.pringtOrder(order);
            });
            count++;
        }
    }
    getCourier() {
        return new Courier_1.Courier();
    }
}
exports.Restaurant = Restaurant;
