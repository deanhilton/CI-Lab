const { sum, product, difference } = require('./app');

// sum function

test('sum function exists', () => {
  expect(sum).toBeDefined();
});

test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
});

test('adds 101 + 101 to equal 200', () => {
        expect(sum(101, 101)).toBe(202);
});

// product function

test('product function exists', () => {
  expect(product).toBeDefined();
});

test('multiply 2 * 2 to equal 4', () => {
        expect(product(2, 2)).toBe(4);
});

test('multiply 3 * 200 to equal 600', () => {
        expect(product(3, 200)).toBe(600);
});


// difference function

test('difference function exists', () => {
  expect(difference).toBeDefined();
});

// add difference tests here...

test('Check that the difference between 1 and 10 is 9', () => {
        expect(difference(1, 10)).toBe(9);
});

test('Check that the difference between 77 and 3 is 74', () => {
        expect(difference(77, 3)).toBe(74);
});

