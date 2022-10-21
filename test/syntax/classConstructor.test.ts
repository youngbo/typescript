import { Person } from '../../src/syntax/classConstructor';

describe('Class Constructor Test', () => {
    test('no explicit initialization test', () => {
      const pers = new Person('John', 'Smith', 29)
      expect(pers.firstName).toBe('John');
      expect(pers.lastName).toBe('Smith');
    });
});