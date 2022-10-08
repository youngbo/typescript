// https://refactoring.guru/design-patterns
/**
 * Strategy Design Pattern
 *
 * Intent: Lets you define a family of algorithms, put each of them into a
 * separate class, and make their objects interchangeable.
 */

export interface IStrategy{
  doAlgorithm(data:string[]):string[];
}

export class Context {
  private strategy: IStrategy;
  constructor(strategy:IStrategy){
    this.strategy=strategy;
  }

  setStrategy(strategy:IStrategy){
    this.strategy=strategy;
  }

  public doSomeBusinessLogic(): string {
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    return result.join(',');
  }
}

export class ConcreteStrategyA implements IStrategy {
    public doAlgorithm(data:string[]): string[] {
        return data.sort();
    }
}

export class ConcreteStrategyB implements IStrategy {
  public doAlgorithm(data:string[]): string[] {
    return data.reverse();
  }
}