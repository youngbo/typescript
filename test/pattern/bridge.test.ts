import { IImplementation, RefinedAbstraction, ConcreteImplementationA, ConcreteImplementationB } from '../../src/Bridge';

describe('AbstractMethod test', () => {

    test('should split a large class into two separate hierarchies - abstraction and implementation 1', () => {
        let implementationA : IImplementation = new ConcreteImplementationA();
        let abstraction : RefinedAbstraction = new RefinedAbstraction(implementationA);

        const result = abstraction.Feature(); 

        expect(result).toBe("FefinedAbstraction: FeatureImplementationA");
    });

    test('should split a large class into two separate hierarchies - abstraction and implementation 2', () => {
        let implementationB : IImplementation = new ConcreteImplementationB();
        let abstraction : RefinedAbstraction = new RefinedAbstraction(implementationB);

        const result = abstraction.Feature(); 

        expect(result).toBe("FefinedAbstraction: FeatureImplementationB");
    });
});