// Component interfaces
interface Coffee {
    getCost(): number
    getDescription(): string
}

// Concrete Component
class SimpleCoffee implements Coffee {
    getCost(): number {
        return 5
    }

    getDescription(): string {
        return 'Simple coffee'
    }
}

// Decorator Base Class
class CoffeeDecorator implements Coffee {
    protected coffee: Coffee

    constructor(coffee: Coffee) {
        this.coffee = coffee
    }

    getCost(): number {
        return this.coffee.getCost()
    }

    getDescription(): string {
        return this.coffee.getDescription()
    }
}

// Concrete Decorators
class WithMilk extends CoffeeDecorator {
    getCost(): number {
        return super.getCost() + 2
    }

    getDescription(): string {
        return super.getDescription() + ', milk'
    }
}

class WithSugar extends CoffeeDecorator {
    getCost(): number {
        return super.getCost() + 1
    }

    getDescription(): string {
        return super.getDescription() + ', sugar'
    }
}

// Usage
let coffee: Coffee = new SimpleCoffee()
console.log(coffee.getCost()) // 10
console.log(coffee.getDescription()) // Simple coffee

coffee = new WithMilk(coffee)
console.log(coffee.getCost()) // 12
console.log(coffee.getDescription()) // Simple coffee, milk

coffee = new WithSugar(coffee)
console.log(coffee.getCost()) // 13
console.log(coffee.getDescription()) // Simple coffee, milk, sugar
