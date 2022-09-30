/**
 * Abstract Factory Design Pattern
 *
 * Intent: Lets you produce families of related objects without specifying their
 * concrete classes.
 */

interface AbstractProductA {
    UsefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA{
    UsefulFunctionA(): string {
        return 'The result of the product A1.';   
    }
}

class ConcreteProductA2 implements AbstractProductA{
    UsefulFunctionA(): string {
        return 'The result of the product A2.';   
    }
}

interface AbstractProductB {
    UsefulFunctionB(): string;
    UsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB{
    UsefulFunctionB(): string {
        return 'The result of the product B1.';
    }
    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.UsefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB{
    UsefulFunctionB(): string {
        return 'The result of the product B2.';
    }
    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.UsefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}

interface AbstractFactory{
    CreateProductA(): AbstractProductA;
    CreateProductB(): AbstractProductB;
}

class ConcreteFactory implements AbstractFactory{
    CreateProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    CreateProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}