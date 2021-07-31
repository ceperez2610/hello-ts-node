
abstract class vehicle {
  constructor(protected velicity: number) {}

  drive(time: number): string {
    return `Ride ${time * this.velicity}`;
  }
}

export class Bike extends vehicle {}

export class Car extends vehicle {}





