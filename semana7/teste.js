class vehicle {
    model;
    year;

    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    calculateFuelConsumption(){

    }
}

class car extends vehicle {
    maximumMovementTime;
    tankCapacity;

    constructor(model, year, maximumMovementTime, tankCapacity){
        super(model, year);
        this.maximumMovementTime = maximumMovementTime;
        this.tankCapacity = tankCapacity;
    }

    calculateFuelConsumption(){
        return (this.tankCapacity/this.maximumMovementTime);
    }
}

class motorcycle extends vehicle {
    maximumMovementTime;
    tankCapacity;

    constructor(model, year, maximumMovementTime, tankCapacity){
        super(model, year);
        this.maximumMovementTime = maximumMovementTime;
        this.tankCapacity = tankCapacity;
    }

    calculateFuelConsumption(){
        return (this.tankCapacity/this.maximumMovementTime);
    }
}