export class Person {
  public firstName ='';
  public lastName = '';
  private age = 0;

  protected sayHello(): string {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

export class Employee extends Person {
  department = '';
  public pay = 100;
  public greeting ='';
  reviewPerformance(): void {
    this.greeting = this.sayHello();
    this.increasePay(5);
  }

  increasePay(percent: number): void {
    this.pay += this.pay*percent/ 100;
  }
}
