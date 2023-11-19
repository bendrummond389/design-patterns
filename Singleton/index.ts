class Singleton {
    private static instance: Singleton

    private constructor() {
        // initialization code
    }

    public static getInstance() {
        // check if there is already an instance of singleton created and if not create one
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }

    public someMethod() {
        // Some method
    }
}

// Usage
const singletonInstance = Singleton.getInstance()
singletonInstance.someMethod()
