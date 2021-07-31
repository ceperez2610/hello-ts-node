"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pringtOrder = exports.getRandomTime = void 0;
const getRandomTime = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.getRandomTime = getRandomTime;
const pringtOrder = (order) => {
    const printTime = (time) => {
        return time ? `${time.getMinutes()}:${time.getMilliseconds()}` : '--';
    };
    console.log(`[>] Order #${order.number} - start ${printTime(order.cookStart)} finish: ${printTime(order.cookFinish)} pick: ${order.pick} deliver: ${order.deliver}`);
};
exports.pringtOrder = pringtOrder;
