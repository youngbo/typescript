import {Creator, ConcreteCreator1,ConcreteCreator2 } from '../../src/FactoryMethod'

describe('FactoryMethod test', () => {

    test('allows subclasses to alter the type of objects that will be created_1.', () => {
        let creator1: Creator = new ConcreteCreator1();

        let result :string = creator1.someOperation();
        
        expect(result).toBe("Creator: Result of the ConcreteProduct1");
    });

    test('allows subclasses to alter the type of objects that will be created_2.', () => {
        let creator2: Creator = new ConcreteCreator2();

        let result :string = creator2.someOperation();

        expect(result).toBe("Creator: Result of the ConcreteProduct2");
    });
});