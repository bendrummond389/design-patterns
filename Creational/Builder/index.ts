// Product Class
class UserProfile {
    name: string
    age: number
    email: string
    address: string
    preferences: any

    constructor(builder: UserProfileBuilder) {}
}

// Builder Interface
interface IUserProfileBuilder {
    setName(name: string): this
    setAge(age: number): this
    setEmail(email: string): this
    setAddress(address: string): this
    setPreferences(preferences: any): this
    build(): UserProfile
}

// Concrete Builder
class UserProfileBuilder implements IUserProfileBuilder {
    name: string
    age: number
    email: string
    address: string
    preferences: any

    setName(name: string): this {
        this.name = name
        return this
    }

    setAge(age: number): this {
        this.age = age
        return this
    }

    setEmail(email: string): this {
        this.email = email
        return this
    }

    setAddress(address: string): this {
        this.address = address
        return this
    }

    setPreferences(preferences: any): this {
        this.preferences = preferences
        return this
    }

    build(): UserProfile {
        return new UserProfile(this)
    }
}

// Usage
const userProfile = new UserProfileBuilder()
    .setName('John Doe')
    .setAge(30)
    .setEmail('johndoe@example.com')
    .setAddress('123 Main St')
    .setPreferences({ likes: 'coding', dislikes: 'spam' })
    .build()

console.log(userProfile)
