// import * as stuff from './hr/employee';
// import { Department } from './hr/departments';
import * as stuff from './hr';
// import {} from '../src/math';

describe('classes', () => {
    it('using a class', () => {
        const bob = new stuff.Employee('Bob', 'Smith', 82_000);

        expect(bob.firstName).toBe('Bob');
        expect(bob.currentSalary).toBe(82_000);

        bob.giveRaise(100_000);

        expect(bob.currentSalary).toBe(182_000);

        expect(stuff.PI).toBe(3.14);
    });
});
