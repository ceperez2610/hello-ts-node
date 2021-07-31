import { Order } from "./types";

export const getRandomTime = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const pringtOrder = (order: Order) => {
  const printTime = (time: Date) => {

    return time ? `${time.getMinutes()}:${time.getMilliseconds()}`:'--';
  };

  console.log(
    `[>] Order #${
        order.number
    } - start ${printTime(order.cookStart)} finish: ${printTime(order.cookFinish)} pick: ${order.pick} deliver: ${order.deliver}`



  );
};
