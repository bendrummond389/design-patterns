// Component Interface

interface Graphic {
    render(): void
}

// Leaf
class Circle implements Graphic {
    render(): void {
        console.log('rendering circle')
    }
}

// Leaf
class Square implements Graphic {
    render(): void {
        console.log('rendering square')
    }
}

// Composite

class CompositeGraphic implements Graphic {
    private children: Graphic[] = []

    add(child: Graphic) {
        this.children.push(child)
    }

    remove(child: Graphic) {
        const index = this.children.indexOf(child)
        if (index != -1) {
            this.children.splice(index, 1)
        }
    }

    render() {
        this.children.forEach((child) => {
            child.render
        })
    }
}

// Usage
const circle = new Circle()
const square = new Square()
const composite = new CompositeGraphic()

composite.add(circle)
composite.add(square)

composite.render()
