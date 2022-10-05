/**
 * Visitor Design Pattern
 *
 * Intent: Lets you separate algorithms from the objects on which they operate.
 */

 interface IComponent {
    accept(visitor :IVisitor) : string;
}

interface IVisitor {
    visitA(element:IComponent): string;
    visitB(element:IComponent): string;
}

export class ConcreteComponentA implements IComponent {
    accept(visitor: IVisitor):string{
        return visitor.visitA(this);
    }
    exclusiveMethodA() :string {
        return 'A';
    }
}

export class ConcreteComponentB implements IComponent {
    accept(visitor: IVisitor):string{
        return visitor.visitB(this);
    }
    exclusiveMethodB() :string {
        return 'B';
    }
}

export class ConcreteVisitor implements IVisitor{
    visitA(element:ConcreteComponentA): string{
        return element.exclusiveMethodA();
    }    
    visitB(element:ConcreteComponentB): string{
        return element.exclusiveMethodB();
    }   
}