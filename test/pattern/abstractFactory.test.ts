import {AbstractFactory, ConcreteFactory1 } from '../../src/AbstractFactory';

describe('AbstractMethod test', () => {

    test('should produce families of related objects without specifying their concrete classes', () => {
        let factory : AbstractFactory = new ConcreteFactory1()

        const productA = factory.createProductA();
        const productB = factory.createProductB();
    
        expect(productA.usefulFunctionA())
            .toBe("The result of the product A1.");
        expect(productB.anotherUsefulFunctionB(productA))
            .toBe("The result of the B1 collaborating with the (The result of the product A1.)");    
    });
});