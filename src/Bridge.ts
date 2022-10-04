/**
 * Bridge Factory Design Pattern
 *
 * It lets you split a large class or a set of closely 
 * related classes into two separate hierarchies 
 * -abstraction and implementation - which can be 
 * developed independently of each other
 */

 export interface IImplementation {
    FeatureImplementation(): string;
}

export class ConcreteImplementationA implements IImplementation{
    FeatureImplementation(): string{
        return 'FeatureImplementationA';
    }
}

export class ConcreteImplementationB implements IImplementation{
    FeatureImplementation(): string{
        return 'FeatureImplementationB';
    }
}

export class  Abstraction {
    protected implementation :IImplementation;
    constructor(implementation :IImplementation){
        this.implementation = implementation;
    }
    Feature() : string {
        const result = this.implementation.FeatureImplementation();
        return `Abstraction ${result}`        
    }
}

export class RefinedAbstraction extends Abstraction{
    Feature():string {
        const result = this.implementation.FeatureImplementation();
        return `FefinedAbstraction: ${result}`;
    }
}