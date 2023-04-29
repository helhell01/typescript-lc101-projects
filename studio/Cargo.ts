import { Payload } from "./Payload";

export class Cargo implements Payload {
  // Implements the Payload interface

  massKg: number;
  material: string;
  // Properties
  //     massKg should be a number.
  //     material should be a string.

  constructor(massKg: number, material: string) {
    this.massKg = massKg;
    this.material = material;
  }
  // Constructor
  //     Parameter massKg should be a number.
  //     Parameter material should be a string.
  //     Sets value of this.massKg and this.material
}
