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

describe('miscellaneous', () => {
    const numbers = [1, 2, 3, 4, 5];
    it('immutably add an element to an array', () => {
        const newNumbers = [0, ...numbers, 6];
        expect(newNumbers).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });
    it('imutably removing an element from an array', () => {
        const newNumbers = numbers.filter(n => n !== 3);
        expect(newNumbers).toEqual([1, 2, 4, 5]);
    });

    it('changing a property of an object immutably', () => {
        const movie = { title: 'Episode IV: A New Hope', yearreleased: 1978 };

        const newMovie = { ...movie, yearreleased: 1977 };

        expect(newMovie.yearreleased).toBe(1977);
        expect(movie.yearreleased).toBe(1978); // original object is still wrong!
    });
    it('array destructuring', () => {

        // const first = numbers[0];
        // const third = numbers[2];

        const [first, , third] = numbers;
        expect(first).toBe(1);
        expect(third).toBe(3);

    });
    it('object destructuring', () => {
        const movie = { title: 'Episode IV: A New Hope', yearreleased: 1977 };

        // const title = movie.title;
        // const year = movie.yearreleased;

        const { title, yearreleased: year } = movie;

        expect(title).toBe('Episode IV: A New Hope');
        expect(year).toBe(1977);
    });
});
