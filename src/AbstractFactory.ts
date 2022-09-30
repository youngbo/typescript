/**
 * Abstract Factory Design Pattern
 *
 * Intent: Lets you produce families of related objects without specifying their
 * concrete classes.
 */

 export interface AbstractProductA {
    usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA{
    usefulFunctionA(): string {
        return 'The result of the product A1.';   
    }
}

class ConcreteProductA2 implements AbstractProductA{
    usefulFunctionA(): string {
        return 'The result of the product A2.';   
    }
}

export interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB{
    usefulFunctionB(): string {
        return 'The result of the product B1.';
    }
    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB{
    usefulFunctionB(): string {
        return 'The result of the product B2.';
    }
    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}

export interface AbstractFactory{
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

export class ConcreteFactory1 implements AbstractFactory{
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export class ConcreteFactory2 implements AbstractFactory{
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}