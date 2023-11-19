// Vehicle Interface
interface Vehicle {
    assemble(): void
    test(): void
    deliver(): void
}

// Concrete Vehicles
class Car implements Vehicle {
    assemble() {
        console.log('Assembling a Car.')
    }
    test() {
        console.log('Testing the Car.')
    }
    deliver() {
        console.log('Delivering the Car.')
    }
}

class Truck implements Vehicle {
    assemble() {
        console.log('Assembling a Truck.')
    }
    test() {
        console.log('Testing the Truck.')
    }
    deliver() {
        console.log('Delivering the Truck.')
    }
}

class Bicycle implements Vehicle {
    assemble() {
        console.log('Assembling a Bicycle.')
    }
    test() {
        console.log('Testing the Bicycle.')
    }
    deliver() {
        console.log('Delivering the Bicycle.')
    }
}

// Vehicle Factory
abstract class VehicleFactory {
    public abstract createVehicle(): Vehicle

    public manufactureVehicle() {
        const vehicle = this.createVehicle()
        vehicle.assemble()
        vehicle.test()
        return vehicle
    }
}

// Concrete Factories
class CarFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Car()
    }
}

class TruckFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Truck()
    }
}

class BicycleFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Bicycle()
    }
}

function clientCode(factory: VehicleFactory) {
    const vehicle = factory.manufactureVehicle()
    vehicle.deliver()
}

clientCode(new CarFactory())
clientCode(new TruckFactory())
clientCode(new BicycleFactory())
