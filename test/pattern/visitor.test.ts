import { ConcreteComponentA, ConcreteComponentB, ConcreteVisitor } from '../../src/Visitor';

describe('visitor test', () => {
    test('should separate algorithms from the objects on which they operate. 1', () => {

        let components = [new ConcreteComponentA(), new ConcreteComponentB() ];

        let visitor = new ConcreteVisitor();

        let result ='';
        components.forEach((component)=>{
            result +=component.accept(visitor);
        });

        expect(result).toBe("AB");
    });
});