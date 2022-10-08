import { Context, IStrategy, ConcreteStrategyA, ConcreteStrategyB } from '../../src/Strategy';

describe('Strategy pattern test', () => {

    test('should define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.1', () => {
        let strategy1 : IStrategy = new ConcreteStrategyA();
        let context = new Context(strategy1);

        const result = context.doSomeBusinessLogic();

        expect(result).toBe("a,b,c,d,e");
    });

    test('should define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.2', () => {
      let strategy2 : IStrategy = new ConcreteStrategyB();
      let context = new Context(strategy2);

      const result = context.doSomeBusinessLogic();

      expect(result).toBe("e,d,c,b,a");
  });
});