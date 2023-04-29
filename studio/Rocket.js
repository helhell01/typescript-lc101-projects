"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    //     Properties:
    //     name should be a string.
    //     totalCapacityKg should be a number.
    //     cargoItems should be an array of Cargo objects.
    //         Should be initialized to an empty array []
    //     astronauts should be an array of Astronaut objects.
    //         Should be initialized to an empty array []
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // Constructor:
    //     Parameter name should be a string.
    //     Parameter totalCapacityKg should be a number.
    //     Sets value of this.name and this.totalCapacityKg
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total = total + items[i].massKg;
        }
        return total;
    };
    // Methods:
    //     sumMass( items: Payload[] ): number
    //         Returns the sum of all items using each item's massKg property
    Rocket.prototype.currentMassKg = function () {
        //return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        var totalTotal = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return totalTotal;
    };
    //     currentMassKg(): number
    //         Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.canAdd = function (item) {
        //return (this.currentWeightKg() + item.massKg) <= this.totalCapacityKg;
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    //     canAdd(item: Payload): boolean
    //         Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    //     addCargo(cargo: Cargo): boolean
    //         Uses this.canAdd() to see if another item can be added.
    //         If true, adds cargo to this.cargoItems and returns true.
    //         If false, returns false.
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
