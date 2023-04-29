import { Payload } from "./Payload";

export class Astronaut implements Payload {
  // Implements the Payload interface

  massKg: number;
  name: string;
  // Properties
  //     massKg should be a number.
  //     name should be a string.

  constructor(massKg: number, name: string) {
    this.massKg = massKg;
    this.name = name;
  }
  // Constructor
  //     Parameter massKg should be a number.
  //     Parameter name should be string.
  //     Sets value of this.massKg and this.name.
}
