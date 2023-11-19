// Subject Interface

interface IDocument {
    display(): void
}

// Real Subject
class HeavyDocument implements IDocument {
    constructor() {
        console.log('HeavyDocument: Loaded after a heavy operation')
    }

    display(): void {
        console.log('HeavyDocument: Displaying content')
    }
}

// Proxy

class DocumentProxy implements IDocument {
    private document: HeavyDocument

    display(): void {
        if (!this.document) {
            console.log('DocumentProxy: Loading document on demand...')
            this.document = new HeavyDocument()
        }
        this.document.display()
    }
}

const documentProxy = new DocumentProxy()
console.log('Client: Executing client code with proxy:')
documentProxy.display() // HeavyDocument will be initialized here
documentProxy.display() // HeavyDocument will not be initialized again
