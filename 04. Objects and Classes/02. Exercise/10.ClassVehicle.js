class Vehicle {
    _parts = {};
    
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    set parts(value) {
        this._parts = {
            engine: value.engine,
            power: value.power,
            quality: value.engine * value.power
        }
    }

    get parts() {
        return this._parts;
    }

    drive(amount) {
        this.fuel -= amount;
    }
}