// Abstract Products
interface Button {
    paint(): void
}

interface TextField {
    render(): void
}

interface Checkbox {
    toggle(): void
}

// Concrete Products for Windows
class WindowsButton implements Button {
    paint() {
        console.log('Rendering a button in a Windows style.')
    }
}

class WindowsTextField implements TextField {
    render() {
        console.log('Rendering a text field in a Windows style.')
    }
}

class WindowsCheckbox implements Checkbox {
    toggle() {
        console.log('Toggling a checkbox in a Windows style.')
    }
}

// Concrete Products for MacOS
class MacOSButton implements Button {
    paint() {
        console.log('Rendering a button in a MacOS style.')
    }
}

class MacOSTextField implements TextField {
    render() {
        console.log('Rendering a text field in a MacOS style.')
    }
}

class MacOSCheckbox implements Checkbox {
    toggle() {
        console.log('Toggling a checkbox in a MacOS style.')
    }
}

// Abstract Factory Interface
interface GUIFactory {
    createButton(): Button
    createTextField(): TextField
    createCheckbox(): Checkbox
}

// Concrete Factories
class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton()
    }

    createTextField(): TextField {
        return new WindowsTextField()
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox()
    }
}

class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton()
    }

    createTextField(): TextField {
        return new MacOSTextField()
    }

    createCheckbox(): Checkbox {
        return new MacOSCheckbox()
    }
}

// Usage
function application(factory: GUIFactory) {
    const button = factory.createButton()
    const textField = factory.createTextField()
    const checkbox = factory.createCheckbox()

    button.paint()
    textField.render()
    checkbox.toggle()
}

// Creating a Windows UI
console.log('Creating a Windows UI:')
application(new WindowsFactory())

// Creating a MacOS UI
console.log('Creating a MacOS UI:')
application(new MacOSFactory())
