import { Employee, Person } from '../../src/syntax/classInheritance';

describe('Class Inhertiance Test', () => {
    test('sayHello method from superclass should be visible.', () => {
      const per = new Person();
      const employee = new Employee();
      employee.firstName ="youngbo";
      employee.lastName ="choi";

      employee.reviewPerformance();
      expect(employee.greeting)
      .toBe("My name is youngbo choi");
      expect(employee.pay).toBe(105)
    });
});